import {Box, Button, Typography} from "@mui/material";
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
                error={formValue.password.error}
                helperText={isSubmit && formValue.password.error ? 'Le mot de passe que vous avez saisi est incorrect.':''}
            />
            {/*Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et doit avoir une taille comprise entre 6 et 13 caractères.*/}
            <Box mt="16px" mb="24px">
                <Button size="large" variant="contained-red" fullWidth={true} onClick={handleSubmit}>Se connecter</Button>
            </Box>
            <Typography>
                <span className="sign-in-modal__forgot-password">Mot de passe oublié ?</span>
            </Typography>
        </Box>
    )
}

export default LoginModalPassword