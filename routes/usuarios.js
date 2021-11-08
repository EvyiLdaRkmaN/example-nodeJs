
const { Router } = require('express');


const router = Router();

// definición de ruta para usuario
// con uso de sus controladores
router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );





module.exports = router;