const express = require('express');
const app = express();
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
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

