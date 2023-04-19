import { useState, useEffect } from "react";

const Modal = ({
  active,
  setActive,
  notaEditar,
  notaSave,
  eliminarNota,
  theme,
  buttonStyle,
  color,
  themeEtiqueta
}) => {
  const editarArray = Object.values(notaEditar);
  const [descripcion, etiqueta] = editarArray;

  const [nOta, setNOta] = useState("");
  const [eTiqueta, setETiqueta] = useState("");
  const [id, setId] = useState("");
  const divValue = () => {
    return document.getElementById("div").innerText;
  };

  useEffect(() => {
    divValue();
    setId(notaEditar.id);
  });

  useEffect(() => {
    setNOta(descripcion);
  }, [active]);

  const handleCerrar = () => {
    setActive(false);
    notaSave({ nOta, eTiqueta, id });
  };

  useEffect(() => {
    document.getElementById("div").focus();
  }, [active])

  return (
    <div className={`modal ${theme} ${active ? "flex" : "hidden"}`}>
      {descripcion.length !== 0 ? (
        <div
          className={`${color} modal-nota`}
          id="div"
          onInput={() => setNOta(divValue())}
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          {descripcion}
        </div>
      ) : (
        <div
          className={`${color} modal-nota nota-vacia`}
          id="div"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          
        </div>
      )}

      <div className="modal-bottom">
        {etiqueta.length !== 0 ? (
          <span className={`${theme} ${color} modal-etiqueta-span`}>
            {etiqueta}
          </span>
        ) : (
          <input
            className={`${theme} ${color} modal-etiqueta-input`}
            type="text"
            placeholder="Añadir etiqueta"
            onChange={(e) => setETiqueta(e.target.value)}
          />
        )}

        <button
          className={`${themeEtiqueta}-eliminar button eliminar`}
          onClick={() => eliminarNota(id)}
        >
          Eliminar
        </button>
      </div>

      <button
        className={`${buttonStyle} ${themeEtiqueta} cerrar button button-close`}
        onClick={handleCerrar}
      >
        Cerrar
      </button>
    </div>
  );
};

export default Modal;
