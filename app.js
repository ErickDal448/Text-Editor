/* npm run dev */
const express = require("express");
const bodyParser = require('body-parser')
const { dirname } = require("path");
const ejs = require('ejs');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require('dotenv').config();

const port = 3000;

//Conexión a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qazgzzb.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e));


//motor de plantillas 
app.set('view engine', 'ejs');
app.set("views", __dirname + '/views');

app.use(express.static(__dirname + "/public" ));

// rutas web
app.use('/plantillas', require('./router/RutasWeb'));


app.use((req, res, next) => {
  res.status(404).render("404");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});