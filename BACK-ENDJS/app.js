import express from 'express'
import PostagemController from './controllers/PostagemController.js'
import rootController from './controllers/rootController.js'
import cors from 'cors'
const app = express()
app.use((req,res,next)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header("Acess-Control-Allow-Methods","GET,PUSH,POST,DELETE")
    res.header("Acess-Control-Allow-Headers","X-PINGOTHER,CONTENT-Type, Authorization")
    app.use(cors())
    next()
})
app.use(express.json())
PostagemController(app)
rootController(app)
export default app