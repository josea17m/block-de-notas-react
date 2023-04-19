import { useEffect, useRef, useState } from "react";

const Nota = ({
  activo,
  setActive,
  setNotaEditar,
  theme,
  borderTheme,
  descripcion,
  etiqueta,
  id,
  color
}) => {

  const div = useRef("");

  const handleActiveModal = () => {
    setNotaEditar({ descripcion, etiqueta, id });
    setActive(true);
  };

  return (
    <div
      className={`${borderTheme} ${color} ${theme} ${activo ? "nota-active" : ""}`}
      ref={div}
      onClick={handleActiveModal}
    >
      {descripcion.length !== 0 ? (
        <p className="p">{descripcion}</p>
      ) : (
        <p className="nota-vacia">Nota vacia</p>
      )}

      {etiqueta.length !== 0 ? (
        <span className={`${borderTheme} ${color} etiqueta`}>{etiqueta}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nota;
