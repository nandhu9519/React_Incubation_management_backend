const express = require ('express')
const connectDb = require ('./config/connections')
const { errorHandler, notFound } = require('./middlewares/errors')
const userRoute = require('./routes/userRouter')

const app=express()
connectDb()
app.use(express.json())
// app.use(errorHandler)
// app.use(notFound)

app.use('/api/users',userRoute)
app.listen(5000,console.log('Server running on PORT 5000'))