import * as moment from "moment";
const now = moment(new Date())

const validateFields = (name, value, errors, setErrors) => {
    switch (name) {
        case 'email':
            if (!value) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    email: 'Une adresse e-mail est obligatoire.'
                }))
            } else if (!new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(value)) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    email: 'Entrez une adresse e-mail valide.'
                }))
            } else {
                setErrors(prevErrors => {
                    const {email, ...rest} = prevErrors
                    return rest
                })
            }
            break
        case 'password':
            if (!value) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    password: 'Un mot de passe est obligatoire.'
                }))
            } else {
                setErrors(prevErrors => {
                    const {password, ...rest} = prevErrors
                    return rest
                })
            }

            break
        case 'birthDate':
            if (!value) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    birthDate: 'Sélectionnez votre date de naissance pour continuer.'
                }))
            } else if (now.diff(value, 'years') < 18) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    birthDate: 'Vous devez avoir au moins 18 ans pour utiliser Airbnb. Les autres personnes ne verront pas votre date de naissance.'
                }))
            } else {
                setErrors(prevErrors => {
                    const {email, ...rest} = prevErrors
                    return rest
                })
            }
            break
        case 'newPassword':
            if (!value) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    newPassword: 'Un mot de passe est obligatoire.'
                }))
            } else if (!new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,13}$/).test(value)) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    newPassword: 'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et doit avoir une taille comprise entre 6 et 13 caractères.'
                }))
            } else {
                setErrors(prevErrors => {
                    const {newPassword, ...rest} = prevErrors
                    return rest
                })
            }
            break
        case 'firstName':
        case 'lastName':
            if (!value) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [name]: `Un ${name === 'firstName' ? "prénom" : "nom"} est obligatoire.`
                }))
            } else if (!new RegExp(/^[^±!@£$%^&*_+§¡€#¢¶•ªº\\\/<>?:;|=.,]*$/).test(value)) {
                console.log('test')
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [name]: `Votre ${name === 'firstName' ? "prénom" : "nom"} contient un caractère non autorisé. Essayez de l'écrire différemment.`
                }))
            } else if (value.length > 35) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [name]: `Votre ${name === 'firstName' ? "prénom" : "nom"} doit contenir au maximum 35 caractères. Veuillez réessayer.`
                }))
            } else {
                setErrors(prevErrors => {
                    const {[name]: value, ...rest} = prevErrors
                    return rest
                })
            }
            break
    }
}

export default validateFields