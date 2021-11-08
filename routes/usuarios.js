const express = require('express');
const app = express();
// permitir json
app.use(express.json());

app.get('/', async ({ query }, res) => {
    const { q, nombre = 'No name', apikey, page = 1, limit } = query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
});

app.put('/:id', ({ params }, res) => {
    const { id } = params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
});

app.post('/', ({ body }, res) => {
    const { nombre, edad } = body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre,
        edad
    });
});

app.delete('/', (req, res) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
} );

// router.patch('/', usuariosPatch );





module.exports = app;