require ('dotenv').config()
const router = require (`./routes/index`)
const express = require ('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended:false}))
app.use (express.json())

app.use("/",router)
app.listen (PORT, ()=>{
    console.log("halo")
})