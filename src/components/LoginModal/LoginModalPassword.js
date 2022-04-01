import {Box, Button, TextField, Typography} from "@mui/material";
import PasswordField from "./PasswordField";

const LoginModalPassword = ({values, errors, handleChange, handleSubmit, showErrors, isLoading, loginFailed}) => {

    return (
        <Box p="24px" width="520px">
            {
                (loginFailed) &&
                <div className="password-error__container">
                    <div className="password-error__icon">
                        !
                    </div>
                    <div>

                        <div className="password-error__title bold">
                            Merci de réessayer
                        </div>
                        <div className="password-error__helper-text">
                            Le mot de passe que vous avez saisi est incorrect. Réessayez ou sélectionnez une autre option de
                            connexion.
                        </div>
                    </div>
                </div>
            }
            <Box sx={{display: "none"}}>
                <TextField
                    type="email"
                    id="modal-email"
                    name="email" value={values.email}
                    autoComplete="username"
                />
            </Box>
            <PasswordField
                id="modal-password"
                name="password"
                label="Mot de passe"
                fullWidth={true}
                placeholder="Mot de passe"
                value={values.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={showErrors && errors.password ? errors.password : ''}
            />
            <Box mt="16px" mb="24px">
                <Button size="large" variant="contained-red" fullWidth={true} onClick={handleSubmit}>
                    {isLoading ?
                        <div className="loading"><span/><span/><span/></div>
                        :
                        "Se connecter"
                    }

                </Button>
                <div className="dot-pulse"/>
            </Box>
            <Typography>
                <span className="sign-in-modal__forgot-password">Mot de passe oublié ?</span>
            </Typography>
        </Box>
    )
}

export default LoginModalPassword