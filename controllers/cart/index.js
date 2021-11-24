const { response, request } = require('express');

const { Cart } = require('../../models');


const cartGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const cartPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre,
        edad
    });
}

// nos regresa el carrito solicitado
const crearCart = async (req, res = response) => {

    // const { id } = req.params;

    try {
        const cart = new Cart(req.body);        
        await cart.save();


        res.status(201).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:'Error'
        })
    }
}

const cartPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const cartPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const cartDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




module.exports = {
    crearCart,
}