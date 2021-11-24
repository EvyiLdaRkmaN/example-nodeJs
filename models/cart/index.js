
const { Schema, model } = require('mongoose');

const CarroSchema = Schema({
    cajero: {
        type: String,
        required: [true, 'El cajero es obligatorio']
    },
    caja: {
        type: Number,
        required: [true, 'El caja es obligatorio'],
    },
    oficina: {
        type: Number,
        required: [true, 'La oficina es obligatoria'],
    },
    conceptos: {
        type: Array,
        conceptoId: { type: String, unique: true },
        conceptoNombre: { type: String },
        require:false
    },
    vehiculos:{
        type: Object,
        vehiculo:{type:String, require:true},
        require: false
    }

});



CarroSchema.methods.toJSON = function() {
    const { __v, ...cart  } = this.toObject();
    return cart;
}

module.exports = model( 'Cart', CarroSchema );
