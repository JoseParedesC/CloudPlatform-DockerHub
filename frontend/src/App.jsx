import { useEffect, useState } from "react";

function App() {
  const API_URL = import.meta.env.VITE_APP_API_URL
  const [prueba, setDataP] = useState(null);
  const [data, setData] = useState(null);
  const [ventasD, setDataD] = useState(null);
  const [ventas, setVentas] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/prueba`) // Nginx redirige al backend cuando esta configurado el proxy en el nginx.conf /api
      .then(res => res.json())
      .then(setDataP)
      .catch(setError);

    fetch(`${API_URL}/api/products`) // Nginx redirige al backend
      .then(res => res.json())
      .then(setVentas)
      .catch(setError);

     fetch(`${API_URL}/api/ventas/ventas_details`) // Nginx redirige al backend
      .then(res => res.json())
      .then(setData)
      .catch(setError);

    fetch(`${API_URL}/api/ventas/ventas_details?codigo_factura:FAC-001`) // Nginx redirige al backend
      .then(res => res.json())
      .then(setDataD)
      .catch(setError);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🚀 Frontend React con Nginx - JdParedesC</h1>
      <div>HOLA </div>
      <pre>{JSON.stringify(prueba, `No hay conexion al backend`, 2)}</pre>
      <hr />
      <a href="https://backend-service-959958084950.us-central1.run.app/api/prueba">{API_URL}/api/prueba</a>
      <hr></hr>
      <pre>{JSON.stringify(data, "No hay conexion a la base de datos", 2)}</pre>
      <hr></hr>
      <pre>{JSON.stringify(ventasD, "No hay conexion a la base de datos", 2)}</pre>
      <hr />
      <pre>{JSON.stringify(ventas, "No hay conexion a la base de datos", 2)}</pre>
      <p>Errores:</p>
      <pre>{JSON.stringify(error, "No hay conexion a la base de datos", 2)}</pre>
    </div>
  );
}

export default App;
