import { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  // Traer las citas que estan en el localStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Funcion que nos sirve para actulizar el state de citas - dentro de esta ejecutamos invocamos la funcion que actualiza la citas
  const crearCita = (cita) => {
    // Actualizamos el state de citas, obteniedo los valores anterios y agregando la nueva cita
    guardarCitas([...citas, cita]);
  };

  // State para las citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // UseEffect para actulizar nuestro localStorage guardan lo que tenemos en nuestra variable citas
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  // Funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  const titulo =
    citas.length === 0 ? "No hay citas 📂" : "Administra tus citas 🧑‍💻";

  return (
    <>
      <h1>🐶 Administrador de Pacientes Canicos 🐕️</h1>
      <div className="container">
        <div className="one-half column">
          {/* prettier-ignore */}
          <Formulario
            crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {/* Iteraos el array con map y por cada cita retornamos un componente */}
          {citas.map((cita) =>
            /* prettier-ignore */
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
