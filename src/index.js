const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const conversor = require("./routes/conversor")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/conversor", conversor)



app.listen(3003, ()=>{
  console.log("aplicação rodando")
})