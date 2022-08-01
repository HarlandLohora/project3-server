const { Schema, model } = require("mongoose");

const alumnoSchema = new Schema(
  {
    nombre: String,
    edad: String,
    matricula: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Alumno", alumnoSchema);
