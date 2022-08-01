const router = require("express").Router();
const authRoutes = require("./auth.routes");
const alumnosRoutes = require("./alumnos.routes");

/* GET home page */
//http://localhost:5005/api
router.get("/", (req, res, next) => {
  res.json("Proyecto 3");
});

router.use("/auth", authRoutes);

router.use("/alumnos", alumnosRoutes);

module.exports = router;
