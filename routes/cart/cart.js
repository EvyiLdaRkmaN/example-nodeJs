
const { Router } = require('express');

const { crearCart } = require('../../controllers/cart');

const router = Router();


// ejemplo de rutas usuarios
// router.get('/', usuariosGet );

// router.put('/:id', usuariosPut );

router.post('/', crearCart );

// router.delete('/', usuariosDelete );
// comentario de prueba
// router.patch('/', usuariosPatch );





module.exports = router;