import express from "express";
import cors from "cors";

const app = express();

// Configo los middlewares
app.use(cors());
app.use(express.json());

// ruta del servidor
app.get("/api/health", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Servidor funcionando correctamente",
  });
});

export default app;