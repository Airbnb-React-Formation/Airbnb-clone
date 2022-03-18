import crypto from "crypto-browserify";

const localStorageKey = 'db-back-airbnb-clone-users'

const loadUsers = () => {
    const users = JSON.parse(window.localStorage.getItem(localStorageKey))
    return users ?? []
}

const loadUserById = async (id, cleanFields = false) => {
    const user = loadUsers().find(item => item.id === id)
    return cleanFields && user ? clean(user) : user
}

const saveUser = async (user) => {
    const users = loadUsers()
    users.push(user)
    saveUsers(users)
}

const saveUsers = (users) => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(users))
}

function clean(user) {
    if (user.passwordHash) {
        const {passwordHash, ...rest} = user
        return rest
    }
}

const validateUser = ({username, password}) => {
    if (!username) {
        const error = new Error("Le nom d'utilisateur est obligatoire")
        error.status = 400
        throw error
    }
    if (!password) {
        const error = new Error('Le mot de passe est obligatoire')
        error.status = 400
        throw error
    }
}

const hashcode = (data) => {
    return crypto.createHash('md5').update(data).digest('hex')
    // return crypto.sha256(data)
}

const authenticate = async ({username, password}) => {
    validateUser({username, password})
    const id = hashcode(username)
    const user = (await loadUserById(id) || {})
    if (user.passwordHash === hashcode(password)) {
        return {...clean(user),token : Buffer.from(user.id).toString('base64')}
    }
    const error = new Error("Nom d'utilisateur ou mot de passe incorrect")
    error.status = 400
    throw error
}

export {authenticate,loadUserById}
