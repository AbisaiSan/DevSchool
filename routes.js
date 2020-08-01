const express = require('express')
//Variavel responsavel pelas rotas
const routes = express.Router()



routes.get('/', function(req, res){
  return res.redirect("/teachers")
})

routes.get('/teachers', function(req, res){
  return res.render("teachers")
})

routes.get('/students', function(req, res){
  return res.send("Students")
})


//Exportando o arquivo
module.exports = routes

