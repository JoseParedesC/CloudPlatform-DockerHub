import 'dotenv/config';
import express from "express";
import cors from "cors";
import routerApi from './routes/index.js';

const port = process.env.PORT || 8080
const app = express();

// Configurar CORS para permitir el dominio del frontend
const allowedOrigins = [
  "http://localhost:3000", // para desarrollo local
  "https://frontend-service-959958084950.us-central1.run.app" // URL real de tu frontend en Cloud Run
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


app.use(express.json());


// Ruta de prueba
app.get("/api/prueba", async (req, res) => {
  res.json({ message: "Conexión exitosa a Backend" });
  console.log("Conexión exitosa a Backend");
});

routerApi(app);

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Backend corriendo en http://0.0.0.0:${port} 🤔`);
});
