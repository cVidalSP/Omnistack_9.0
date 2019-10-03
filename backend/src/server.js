const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();

// Conectar com a base do mongodbAtlas
mongoose.connect('mongodb+srv://vidal:vidal@omnistack-cfebw.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

// GET, POST, PUT DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edicao e delete)
// req.body = Acessar corpo da requisicao (criacao e edicao)

app.use(cors());
app.use(express.json()); // Faz com que o express entenda json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen(3333);