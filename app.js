const express = require('express');
const app = express();
// llamando configuración
require("./config");

app.use(require("./routes/usuarios"));

//starting the server
app.listen(process.env.PORT, () => {
    console.log(`Backend server listening on port ${process.env.PORT}`);
})