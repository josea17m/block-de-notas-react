import React from "react";
import Nota from "./Nota";

const Notes = ({
  notas,
  etiquetaSelecion,
  setActive,
  setNotaEditar,
  theme,
  borderTheme,
  color,
}) => {
  const notasArray = Object.values(notas);
  const etiquetasAct = notasArray.filter((e) => {
    return e.etiqueta == etiquetaSelecion;
  });
  return (
    <>
      {etiquetaSelecion.length > 0 ? (
        <div className={`notes`}>
          {etiquetasAct.map((e) => (
            <Nota
              key={e.id}
              descripcion={e.descripcion}
              etiqueta={e.etiqueta}
              activo={e.activo}
              setActive={setActive}
              setNotaEditar={setNotaEditar}
              theme={theme}
              color={color}
              borderTheme={borderTheme}
            />
          ))}
        </div>
      ) : (
        <div className={`notes`}>
          {notasArray.map((nota) => (
            <Nota
              key={nota.id}
              descripcion={nota.descripcion}
              etiqueta={nota.etiqueta}
              id={nota.id}
              setActive={setActive}
              setNotaEditar={setNotaEditar}
              theme={theme}
              borderTheme={borderTheme}
              color={color}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Notes;
