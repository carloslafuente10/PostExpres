require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());//envio de informacion en json
app.use(bodyParser.urlencoded({ extended: true }));//envio de informacion en formularios


//const port = 3000;
const PORT=process.env.PORT || 3000;
console.log(PORT);

app.get('/', (req, res) => {
    res.send(`
        <h1>Practica Carlos La Fuente V2</h1>
        <p>Esto es una práctica nodejs con express</p>
        <p>corre en el puerto ${PORT}</p>
    `);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Usuario con ID: ${userId}`);


});

app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);

});
