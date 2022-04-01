import {rest} from 'msw'
import accommodations from '../data/accommodations.json'
import * as db from "./db"
const Buffer = require('buffer/').Buffer

export const handlers = [
    rest.get('/api/accommodations', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(accommodations)
        )
    }),
    rest.get('/api/accommodations/:id', (req, res, ctx) => {
        const {id} = req.params
        const index = accommodations.findIndex(accommodation => accommodation.id === +id)
        if (index < 0) {
            return res(
                ctx.status(404)
            )
        }
        return res(
            ctx.status(200),
            ctx.json(accommodations[index])
        )
    }),
    rest.post('/auth/login', async (req, res, ctx) => {
        const {username, password} = req.body
        let user
        try{
            user = await db.authenticate({username, password})
        } catch (error){
            return res(
                ctx.delay(),
                ctx.status(401),
                ctx.json({status:401,message:'test'})
            )
        }
        return res(
            ctx.delay(),
            ctx.json({user})
        )
    }),
    rest.get(`/auth/me`, async (req, res, ctx) => {
        const user = await getUser(req)
        const token = getToken(req)
        return res(ctx.json({user: {...user, token}}))
    }),
    rest.post('/auth/user', async (req, res, ctx) => {
        const {user} = req.body
        if(db.isUserExists(user)){
            return res(
                ctx.delay(),
                ctx.status(200)
            )
        }
        return res(
            ctx.delay(),
            ctx.status(404)
        )
    }),
    rest.post(`/auth/register`, async (req, res, ctx) => {
        const {username, password} = req.body
        const userFields = {username, password}
        await db.createUser(userFields)
        let user
        try {
            user = await db.authenticate(userFields)
        } catch (error) {
            return res(
                ctx.delay(),
                ctx.status(400),
                ctx.json({status: 400, message: error.message}),
            )
        }
        return res(
            ctx.delay(),
            ctx.json({user})
        )
    }),
];


const getToken = req => req.headers.get('Authorization')?.replace('Bearer ', '')

const getUser = async (req) => {
    const token = getToken(req)
    if (!token) {
        const error = new Error('Le Token est obligatoire')
        error.status = 401
        throw error
    }
    let userId
    try {
        userId = Buffer.from(token, 'base64').toString()
    } catch (e) {
        const error = new Error('token Invalid. Merci de se reconnecter.')
        error.status = 401
        throw error
    }
    const user = await db.loadUserById(userId, true)
    if (!user) {
        const error = new Error('Utilisateur non trouvé avec ce Token')
        error.status = 401
        throw error
    }
    return user
}

export default handlers