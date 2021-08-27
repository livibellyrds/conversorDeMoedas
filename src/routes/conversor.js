const express = require("express")
const router = express.Router()
const {conversor,dizOla} = require("../service/conversorService")

router.get('/', async (req, res) =>{
  try {
    const result = await conversor()
    res.json(result)
  } catch (error) {
    res.status(500).json({error: error})
  }
    
})

router.get('/ola', (req, res) =>{
  try {
    const result =  dizOla(req.body)
    res.json(result)
  } catch (error) {
    res.status(500).json({error: error})
  }
    
})

module.exports= router