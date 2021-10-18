import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  /*-------------------------------------------------- states ------------------------------------------------------*/

  // Crear state en citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  // Funcion que se ejecuta cada que el usuario escribe en un input
  // Aqui mandamos a llamar la funcion actualizarCita pasando como parametros los valores de nuestros inputs para actualizar el state
  const actualizarState = (event) => {
    actualizarCita({
      ...cita,
      [event.target.name]: event.target.value,
    });
  };

  const [error, actulizarError] = useState(false);

  /*-------------------------------------------------- states ------------------------------------------------------*/

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cundo hacemos submit al formulario
  const submitCita = (event) => {
    event.preventDefault();

    // Validar
    // -Que los inputs esten vacios
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actulizarError(true);
      return;
    }

    // Eliminar mensaje de error
    if (error) actulizarError(false);

    // Asignar un ID
    cita.id = uuidv4();

    // Crear la cita
    crearCita(cita);

    // Reiniciar el form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  /*-------------------------------------------------- return ------------------------------------------------------*/

  return (
    <Fragment>
      <h2>Crear cita 📝</h2>
      {/* prettier-ignore */}

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      {/* prettier-ignore */}
      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        {/* prettier-ignore */}
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        {/* prettier-ignore */}
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Description</label>
        {/* prettier-ignore */}
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        >
        </textarea>
        {/* prettier-ignore */}
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
