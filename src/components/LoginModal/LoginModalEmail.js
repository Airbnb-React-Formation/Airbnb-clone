import {Box, Button, Divider, TextField, Typography} from "@mui/material";
import {AppleIcon, FacebookIcon, GoogleIcon, Icon, PhoneIcon} from "../Icon/Icon";

const LoginModalEmail = ({formValue, handleChange, handleSubmit,isSubmit}) => {
    return (
        <Box p="24px" width="520px">

                    <Typography id="modal-title" variant="h5" fontWeight="bold" mt="8px" mb="24px">
                        Bienvenue sur Airbnb
                    </Typography>
                    <TextField
                        type="email"
                        id="modal-email"
                        label="Adresse e-mail"
                        error={formValue.email.error}
                        helperText={isSubmit && formValue.email.error ? 'Entrez une adresse e-mail valide.':''}
                        name="email" value={formValue.email.value}
                        onChange={handleChange}
                        fullWidth={true}
                        placeholder="Adresse e-mail"
                        autoComplete="username"
                    />
                    <Box mt="16px" mb="24px">
                        <Button
                            type="submit"
                            size="large"
                            variant="contained-red"
                            fullWidth={true}
                            onClick={handleSubmit}
                        >
                            Continuer
                        </Button>
                    </Box>
            <Box mt="16px" mb="16px">
                <Divider sx={{color: "#484848", fontSize: "12px"}}>ou</Divider>
            </Box>
            <Box mb="16px">
                <Button startIcon={<Icon className="sign-in-modal__button-icon"><FacebookIcon/></Icon>}
                        variant="bordered" fullWidth={true}>Continuer avec Facebook</Button>
            </Box>
            <Box mb="16px">
                <Button startIcon={<Icon className="sign-in-modal__button-icon"><GoogleIcon/></Icon>} variant="bordered"
                        fullWidth={true}>Continuer avec Google</Button>
            </Box>
            <Box mb="16px">
                <Button startIcon={<Icon className="sign-in-modal__button-icon"><AppleIcon/></Icon>} variant="bordered"
                        fullWidth={true}>Continuer avec Apple</Button>
            </Box>
            <Box>
                <Button startIcon={<Icon className="sign-in-modal__button-icon"><PhoneIcon/></Icon>} variant="bordered"
                        fullWidth={true}>Continuer avec le numéro de téléphone</Button>
            </Box>
        </Box>
    )
}

export default LoginModalEmail