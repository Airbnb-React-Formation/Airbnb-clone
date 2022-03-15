import {Box, Button, Checkbox, Divider, FormControlLabel, TextField, Typography} from "@mui/material";
import PasswordField from "./PassworldField";
import moment from "moment";


const LoginModalSignIn = ({formValue, handleChange}) => {
    return (
        <Box p="24px" width="520px" style={{maxHeight: "calc(100vh - 200px)", overflow: "scroll"}}>
            <TextField id="modal-first-name" label="Prénom" name="firstName" value={formValue.firstName}
                       onChange={handleChange} fullWidth={true} placeholder="Prénom"
            />
            <Box mt="12px">
                <TextField id="modal-last-name" label="Nom" name="lastName" value={formValue.lastName}
                           onChange={handleChange} fullWidth={true} placeholder="Nom"
                />
            </Box>
            <Typography className="sign-in-modal__help-text">
                Assurez-vous qu'il correspond au nom figurant sur votre pièce d'identité
            </Typography>
            <Box mt="24px" mb="24px">
                <TextField type='date' id="modal-birth-date" label="Date de naissance" name="birthDate"
                           value={formValue.birthDate}
                           onChange={handleChange}
                           fullWidth={true}
                           placeholder="Date de naissance"
                           InputLabelProps={{shrink: true}}
                           InputProps={{inputProps: {min: "1900-01-01", max: moment(new Date).format('YYYY-MM-DD')}}}
                />
                <Typography className="sign-in-modal__help-text">
                    Vous devez avoir au moins 18 ans pour vous inscrire. Nous n'indiquerons pas la date de votre
                    anniversaire aux autres utilisateurs Airbnb.
                </Typography>
            </Box>
            <Box mt="24px" mb="24px">
                <TextField type="email" id="modal-email" label="Adresse e-mail" name="email" value={formValue.email}
                           onChange={handleChange} fullWidth={true} placeholder="Adresse e-mail"
                />
                <Typography className="sign-in-modal__help-text">
                    Nous vous enverrons les confirmations et les reçus de voyage par e-mail.
                </Typography>
            </Box>
            <Box mt="24px" mb="24px">
                <PasswordField id="modal-password" label="Mot de passe" name="password"
                               value={formValue.password} onChange={handleChange} fullWidth={true}
                               placeholder="Mot de passe"
                />
            </Box>
            <Typography className="sign-in-modal__general-condition-text">
                En cliquant sur <span className="bold">Accepter et continuer</span>, j'accepte les <a
                href="#"> Conditions générales</a>, les <a href="#">Conditions de service
                relatives aux paiements</a>, la <a href="#"> Politique de non-discrimination</a> et je reconnais avoir
                pris connaissance de
                la <a href="#">Politique de confidentialité</a> d'Airbnb.
            </Typography>
            <Box mt="24px" mb="24px">
                <Button size="large" variant="contained-red" fullWidth={true}>
                    Accepter et continuer
                </Button>
            </Box>
            <Box mt="24px" mb="24px">
                <Divider/>
            </Box>
            <Typography className="sign-in-modal__general-condition-text">
                Airbnb vous enverra des offres réservées aux membres, des idées, des e-mails promotionnels et des
                notifications push. Vous pouvez désactiver cette option à tout moment dans les paramètres de votre
                compte ou directement à partir de la notification promotionnelle.
            </Typography>
            <Box mt="16px" mb="16px">
                <FormControlLabel
                    control={<Checkbox defaultChecked/>}
                    label={
                        <Typography className="sign-in-modal__general-condition-text">
                            Je ne souhaite pas recevoir de
                            messages promotionnels d'Airbnb.
                        </Typography>
                    }
                />
            </Box>
        </Box>
    )
}

export default LoginModalSignIn