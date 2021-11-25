const { response, request } = require('express');

const { Cart } = require('../../models');


const cartGet = async(req, res = response ) => {
    const { id } = req.query;
    const cart = await Cart.findById(id);
    
    res.json( cart );
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

const editCart = async( req, res = response ) => {

    // const { id } = req.params;
    const {id, conceptos } = req.body;

    const cart = await Cart.updateOne({_id:id}, {$push:{conceptos:conceptos}});
    
    res.status(201).json( {message: 'Concepto agregado'} );

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
    cartGet,
    editCart
}