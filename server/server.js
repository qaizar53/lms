import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

//initialise express
const app = express()

// connect to database
await connectDB()

//middleware
app.use(cors())

//route
app.get('/', (req, res)=> res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)

//port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})