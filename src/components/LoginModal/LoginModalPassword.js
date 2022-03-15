import {Box, Button, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import PassworldField from "./PassworldField";

const LoginModalPassword = ({formValue, handleChange, handleSubmit, isSubmit}) => {

    return (
        <Box p="24px" width="520px">
            <PassworldField
                id="modal-password"
                name="password"
                label="Mot de passe"
                fullWidth={true}
                placeholder="Mot de passe"
                value={formValue.password.value}
                onChange={handleChange}
            />
            <Box mt="16px" mb="24px">
                <Button size="large" variant="contained-red" fullWidth={true}>Se connecter</Button>
            </Box>
            <Typography>
                <span className="sign-in-modal__forgot-password">Mot de passe oublié ?</span>
            </Typography>
        </Box>
    )
}

export default LoginModalPassword