import {Box, Divider, IconButton, Typography} from "@mui/material";
import {forwardRef, useEffect, useReducer, useState} from "react";
import "./LoginModal.css"
import LoginModalEmail from "./LoginModalEmail";
import LoginModalPassword from "./LoginModalPassword";
import LoginModalSignIn from "./LoginModalSignIn";
import {ArrowBackIosNew, Close} from "@mui/icons-material";
import {useAuth} from "../context/AuthContext";


const LoginModal = forwardRef(({onClose}, ref) => {
    const [page, setPage] = useState('email')
    const initialFormState = {
        email: {
            value: "",
            error: false
        },
        password: {
            value: "",
            error: false
        },
        firstName: {
            value: "",
            error: false
        },
        lastName: {
            value: "",
            error: false
        },
        birthDate: {
            value: "",
            error: false
        },
        newPassword: {
            value: "",
            error: false
        },
    }
    const validateFormState = {
        email: {
            regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            errorMessage: 'Entrez une adresse e-mail valide.'
        },
        newPassword: {
            regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/,
            errorMessage: ''
        }
    }
    const onCLose = onClose

    const formReducer = (state, action) => {
        switch (action.type) {
            case 'HANDLE INPUT TEXT':
                return {...state, [action.field]: {...state[action.field], value: action.payload}}
            case 'HANDLE TOGGLE':
                return {...state, [action.field.value]: !state[action.field]}
            case 'HANDLE VALIDATOR':
                return {...state, [action.field]: {...state[action.field], error: action.payload}}
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(formReducer, initialFormState)
    const {isUserExists,login,authUser,register} = useAuth()
    const titleList = {
        email: "Connexion ou inscription",
        password: "Connexion",
        signIn: 'Terminer mon inscription',
    }
    const [isSubmit, setIsSubmit] = useState(false)
    useEffect(()=>{
        if(authUser){
            onClose()
        }else{
            state.password.error = true
        }
    },[authUser,isSubmit])
    const handleSubmit = () => {
        setIsSubmit(true)
        const error = Object.keys(state).some(e => state[e].error === true)
        // if (!error) {
            switch (page) {
                case 'email' :
                    if (state.email.value && !state.email.error){
                        setIsSubmit(false)
                        return isUserExists(state.email.value)
                            .then(()=>setPage('password'))
                            .catch(()=>setPage('signIn'))
                    }
                    return
                case 'password':
                    if(state.password.value){
                        state.password.error = false
                        login({username:state.email.value,password:state.password.value})
                    }
                    return null
                case 'signIn':
                    if(state.email.value && !state.email.error && state.newPassword.value && !state.newPassword.error){
                        register({username:state.email.value,password:state.newPassword.value})
                    }
                    return null
                default :
                    return null
            }
        }
    // }
    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        if (isSubmit) setIsSubmit(false)
        let error = false
        dispatch({
            type: "HANDLE INPUT TEXT",
            field: fieldName,
            payload: fieldValue
        })
        if (validateFormState[fieldName]) {
            error = !new RegExp(validateFormState[fieldName]["regex"]).test(fieldValue)
            dispatch({
                type: 'HANDLE VALIDATOR',
                field: fieldName,
                payload: error
            })
        }
    }
    const showPage = () => {
        switch (page) {
            case 'email' :
                return <LoginModalEmail formValue={state} handleChange={handleChange} handleSubmit={handleSubmit}
                                        isSubmit={isSubmit}/>
            case 'password' :
                return <LoginModalPassword formValue={state} handleChange={handleChange} handleSubmit={handleSubmit} isSubmit={isSubmit}/>
            case 'signIn' :
                return <LoginModalSignIn formValue={state} handleChange={handleChange} handleSubmit={handleSubmit} isSubmit={isSubmit}/>
        }
    }
    return (
        <Box className="sign-in-modal__container" ref={ref}>

            <Typography style={{position: "relative"}} id="modal-title" align="center" component="h6" fontWeight="bold"
                        pt="24px" pb="24px">
                {titleList[page]}

                {
                    page === "email" ?
                        <IconButton className="sign-in-modal__close-back-btn" onClick={onCLose}>
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
})

export default LoginModal