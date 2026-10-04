const express = require("express");
const router = express.Router();

const conexion = require("../config/database");

// GET /rutas
router.get("/", (req, res) => {

    const sql = `
        SELECT
            id_ruta,
            nombre_ruta,
            origen,
            destino,
            tiempo_estimado,
            estado,
            fecha_creacion
        FROM rutas
        ORDER BY id_ruta ASC
    `;

    conexion.query(sql, (error, resultados) => {

        if (error) {
            console.error("Error al consultar las rutas:", error.message);

            return res.status(500).json({
                mensaje: "Error al consultar las rutas"
            });
        }

        res.status(200).json(resultados);
    });
});

module.exports = router;