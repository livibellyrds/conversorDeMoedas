const express = require("express")
const router = express.Router()
const axios = require("axios")

const conversor = async()=>{
  try {
    const response = await axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL")
    return response.data
  } catch (error) {
    return error
  }
}

const dizOla = (nome) => {
  const ola = nome
  return ola;
}
const soma =(n1,n2)=>{
  return n1 + n2

}

module.exports= {
  conversor,
  dizOla,
  soma
}