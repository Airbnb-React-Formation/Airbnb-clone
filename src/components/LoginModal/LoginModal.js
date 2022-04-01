import {Box, Divider, IconButton, Typography} from "@mui/material";
import {forwardRef, useEffect, useReducer, useState} from "react";
import "./LoginModal.css"
import LoginModalEmail from "./LoginModalEmail";
import LoginModalPassword from "./LoginModalPassword";
import LoginModalSignIn from "./LoginModalSignIn";
import {ArrowBackIosNew, Close} from "@mui/icons-material";
import {useAuth} from "../context/AuthContext";
import useForm from "../../hook/useForm";
import validateFields from "./validateFields";

const initialFormValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    newPassword: "",
}

const titleList = {
    email: "Connexion ou inscription",
    password: "Connexion",
    signIn: 'Terminer mon inscription',
}


const LoginModal = forwardRef(({onClose}, ref) => {
        const [page, setPage] = useState('email')
        const [isLoading, setIsLoading] = useState(false)
        const [loginFailed, setLoginFailed] = useState(false)
        const [userExist, setUserExist] = useState(false)
        const [showErrors, setShowErrors] = useState(false)
        const [isSubmit, setIsSubmit] = useState(false)
        const {values, errors, handleChange, validateForm} = useForm(validateFields, initialFormValues)
        const close = onClose
        const {isUserExists, login, authUser, register, authError} = useAuth()

        useEffect(() => {
            setShowErrors(false)
        }, [page])

        useEffect(() => {
            if (page === 'password' && authUser) {
                close()
            }
        }, [authUser])
        useEffect(() => {
            if (page === "password")
                setLoginFailed(false)
            if (page === "signIn")
                setUserExist(false)
        }, [values])
        useEffect(() => {
            if (isSubmit) {
                setIsSubmit(false)
                switch (page) {
                    case 'email':
                        if (!errors.email) {
                            setIsLoading(true)
                            isUserExists(values.email)
                                .then(() => {
                                    setPage('password')
                                    setIsLoading(false)
                                })
                                .catch(() => {
                                    setPage('signIn')
                                    setIsLoading(false)
                                })
                        }
                        break
                    case 'password':
                        if (!errors.password) {
                            setIsLoading(true)
                            login({username: values.email, password: values.password})
                                .then(() => {
                                    setIsLoading(false)
                                    setLoginFailed(true)
                                })
                        }
                        break
                    case 'signIn':
                        const {password, ...registerFieldsErrors} = errors
                        if (!errors.email) {
                            isUserExists(values.email)
                                .then(() => setUserExist(true))
                                .catch(() => {
                                    setUserExist(false)
                                    if (!Object.keys(registerFieldsErrors).length) {
                                        register({username: values.email, password: values.newPassword})
                                    }
                                })
                        }
                }
            }
        }, [isSubmit])

        const handleSubmit = () => {
            setIsSubmit(true)
            setShowErrors(true)
            const {password, email, ...fields} = values
            switch (page) {
                case 'email' :
                    validateForm({email})
                    break
                case 'password':
                    validateForm({password})
                    break
                case 'signIn':
                    validateForm({email, ...fields})
                    break
                default :
                    break
            }
        }
        const showPage = () => {
            switch (page) {
                case 'email' :
                    return <LoginModalEmail values={values} errors={errors} handleChange={handleChange}
                                            handleSubmit={handleSubmit}
                                            showErrors={showErrors} isLoading={isLoading}/>
                case 'password' :
                    return <LoginModalPassword values={values} errors={errors} handleChange={handleChange}
                                               handleSubmit={handleSubmit}
                                               showErrors={showErrors} isLoading={isLoading} loginFailed={loginFailed}/>
                case 'signIn' :
                    return <LoginModalSignIn values={values} errors={errors} handleChange={handleChange}
                                             handleSubmit={handleSubmit} isLoading={isLoading} showErrors={showErrors}
                                             userExist={userExist}/>
            }
        }
        return (
            <Box className="sign-in-modal__container" ref={ref}>

                <Typography style={{position: "relative"}} id="modal-title" align="center" component="h6"
                            fontWeight="bold"
                            pt="24px" pb="24px">
                    {titleList[page]}

                    {
                        page === "email" ?
                            <IconButton className="sign-in-modal__close-back-btn" onClick={close}>
                                <Close/>
                            </IconButton>
                            :
                            <IconButton className="sign-in-modal__close-back-btn" onClick={() => setPage('email')}>
                                <ArrowBackIosNew/>
                            </IconButton>
                    }
                </Typography>
                <Divider/>
                {showPage()}
            </Box>
        )
    }
)

export default LoginModal