import { useRef } from "react";

const Etiqueta = ({ etiqueta, setEtiquetaSelecion, active, themeEtiqueta }) => {
  const inputRef = useRef("");
  const handleSelecion = () => {
    setEtiquetaSelecion(inputRef.current.value);
  };

  return (
    <input
      ref={inputRef}
      onClick={active ? nada : handleSelecion}
      value={etiqueta}
      type="button"
      className={`${themeEtiqueta} ${active ? "" : "e"} etiqueta-item`}
    />
  );
};

export default Etiqueta;
