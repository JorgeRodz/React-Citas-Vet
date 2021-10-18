import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, eliminarCita }) => {
  return (
    /* prettier-ignore */
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
        <button
          className="button eliminar u-full-widht"
          onClick={()=> eliminarCita(cita.id)} /* Pasamos un arrow function la cual contendra la cita a eliminar cuando se le de click al boton */
        >Eliminar &times;</button>
    </div>
  );
};

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default Cita;
