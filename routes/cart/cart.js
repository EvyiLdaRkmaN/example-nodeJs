
const { Router } = require('express');

const { crearCart, cartGet, editCart } = require('../../controllers/cart');

const router = Router();


// ejemplo de rutas usuarios
router.get('/', cartGet );

router.put('/', editCart );

router.post('/', crearCart );

// router.delete('/', usuariosDelete );
// comentario de prueba
// router.patch('/', usuariosPatch );





module.exports = router;