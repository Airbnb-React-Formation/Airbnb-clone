import { rest } from 'msw'
import accommodations from '../data/accommodations.json'
import * as db from "./db"

export const handlers = [
    rest.get('/api/accommodations', (req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(accommodations)
        )
    }),
    rest.get('/api/accommodations/:id', (req,res,ctx)=>{
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
    rest.post('/auth/login',async (req,res,ctx)=>{
        const {username,password} = req.body
        const user = await db.authenticate({username,password})
        return res(ctx.json({user}))
    })
];

export default handlers