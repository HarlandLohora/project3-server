const express = require("express");
const router = express.Router();
const Alumno = require("../models/Alumno.model");
//vamos a agregar las rutas

//GET http://localhost:5005/api/alumnos

//Todos los alumnos
router.get("/", async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (err) {
    console.log(err);
  }
});

//Alumno detalle
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumno.findById(id);
    res.json(alumno);
  } catch (err) {
    console.log(err);
  }
});

// POST http://localhost:5005/api/alumnos
//Crear alumno recibir los datos en req.body
router.post("/", (req, res) => {
  const { body } = req;

  console.log(body);

  Alumno.create(body)
    .then((resultado) => {
      res.json(resultado);
    })
    .catch(console.log);
});

// PUT http://localhost:5005/api/alumnos
// Editar alumno recibir los datos en req.body
// recibir el id del alumno en params
router.put("/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;

  console.log(body);

  Alumno.findByIdAndUpdate(id, body)
    .then((resultado) => {
      res.json(resultado);
    })
    .catch(console.log);
});

module.exports = router;
