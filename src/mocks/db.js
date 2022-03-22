import CryptoJS from "crypto-js";
const Buffer = require('buffer/').Buffer

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

const isUserExists = (email) => {
    return loadUsers().some(user => user.username === email)
}

const hashcode = (data) => {
    return CryptoJS.SHA256(data).toString(CryptoJS.enc.base64)
}

const authenticate = async ({username, password}) => {
    console.log(hashcode(username))
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

export {authenticate,loadUserById,loadUsers,isUserExists}
