const express = require('express');
const bodyParser = require('body-parser');
const api = express();
const routes = require('./routes/index');

//Configurando o body-parser
api.use(bodyParser.urlencoded({extended: false}));
api.use(bodyParser.json());
api.use(routes);

api.listen(3000, () => {
  console.log("Server on");
});