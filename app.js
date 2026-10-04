const express = require("express");
const cors = require("cors");
require("dotenv").config();

const conexion = require("./config/database");
const rutasRoutes = require("./routes/rutas");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/rutas", rutasRoutes);

app.get("/", (req, res) => {
    res.json({
        mensaje: "API EcoRuta funcionando correctamente"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor EcoRuta ejecutándose en el puerto ${PORT}`);
});