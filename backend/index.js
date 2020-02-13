const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// criando server
const app = express();
app.use(express.json());
app.use(cors());

// iniciando database
mongoose.connect('mongodb+srv://araujs:araujs@cluster0-jnneb.mongodb.net/projetojs?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./src/models/Movies');

// rotas
app.use('/api',require('./src/routes'));

app.listen(3333);