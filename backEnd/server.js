import "dotenv/config";
import app from "./src/app.js";
import pool from "./src/config/database.js";

//puerto del servidor
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await pool.query("SELECT 1");

    console.log("Conexión a MySQL realizada correctamente");

    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo conectar a MySQL:", error.message);
    process.exit(1);
  }
};

startServer();