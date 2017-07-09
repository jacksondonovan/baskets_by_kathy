const express = require('express')
const app = express()
const port = process.env.PORT || 2000
const path = require('path')

const bodyParser = require('body-parser')

app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'server')));
app.use(express.static(path.join(__dirname, 'lib')));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
  res.render('index',{msg:"Welcome to Kathy's baskets!"})
})

app.listen(port,(req,res)=>{
  console.log('listening on port ' + port);
})
