import { useState, useEffect } from "react";

const InputNotes = ({
  setNotas,
  notas,
  etiquetas,
  setEtiquetas,
  active,
  theme,
  borderTheme,
  color,
  buttonStyle
}) => {
  const [descripcion, setDescripcion] = useState("");
  const [etiqueta, setEtiqueta] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState(true);

  const generarId = () => {
    const id = Date.now().toString(36);
    return id;
  };

  const generarIdEtiqueta = () => {
    const id = Date.now();
    return Math.trunc((id * 2) / 9);
  };

  let divValue = () => {
    return document.getElementById("textarea").innerText;
  };

  const divClean = () => {
    return (document.getElementById("textarea").innerText = "");
  };

  const handleSumbit = (nota) => {
    let notaNueva = {
      descripcion,
      etiqueta,
    };
    notaNueva.id = generarId();
    setNotas([...notas, notaNueva]);

    if (etiqueta) {
      let etiquetaNueva = {
        etiqueta,
      };
      etiquetaNueva.id = generarIdEtiqueta();

      if (!etiquetas.includes("")) {
        if (
          etiquetas.some(function (e) {
            return e.etiqueta == etiqueta;
          })
        ) {
          setEtiquetas([...etiquetas]);
          divClean();
          setDescripcion("");
          setEtiqueta("");
          return;
        }
      }

      setEtiquetas([...etiquetas, etiquetaNueva]);
      divClean();
      setDescripcion("");
      setEtiqueta("");
      return;
    }
    divClean();
    setDescripcion("");
    setEtiqueta("");
  };

  return (
    <div className={`form ${borderTheme} ${theme}`}>
      <div
        className={`${color} textarea`}
        id="textarea"
        aria-multiline={true}
        onInput={() => setDescripcion(divValue())}
        aria-expanded={true}
        contentEditable={active ? false : true}
        suppressContentEditableWarning={true}
      ></div>

      <div className="buttons-container">
        <input
          type={`${active ? "hidden" : "button"}`}
          value="Guardar"
          className={`${color} ${buttonStyle} ${theme} ${borderTheme} button save-button`}
          onClick={handleSumbit}
        />

        <input
          type={` ${active ? "hidden" : "text"}`}
          className={`${color} ${theme} ${borderTheme} button button-etiqueta`}
          placeholder="Etiqueta"
          onChange={(e) => setEtiqueta(e.target.value)}
          value={etiqueta}
        />
      </div>
    </div>
  );
};

export default InputNotes;
