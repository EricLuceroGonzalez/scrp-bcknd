const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scrpDataSchema = new Schema({
  Nombre: {
    type: String,
    required: true,
  },
  Apellido: {
    type: String,
    required: true,
  },
  Cedula: {
    type: String,
    required: false,
  },
  Cargo: {
    type: String,
    required: false,
  },
  Salario: {
    type: String,
    required: false,
  },
  Gasto: {
    type: String,
    required: false,
  },
  Estado: {
    type: String,
    required: false,
  },
  FechaDeInicio: {
    type: String,
    required: false,
  },
  FechaActualizacion: {
    type: String,
    required: false,
  },
  Institucion: {
    type: String,
    required: false,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ScrpData = mongoose.model("ScrpData", scrpDataSchema);
