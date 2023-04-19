import React from "react";
import Etiqueta from "./Etiqueta";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

const Navbar = ({
  etiquetas,
  setEtiquetaSelecion,
  active,
  theme,
  setTheme,
  setBorderTheme,
  setColor,
  setThemeEtiqueta,
  themeEtiqueta,
  setButtonStyle
}) => {
  const etiquetasArray = Object.values(etiquetas);

  const handleDarkMode = () => {
    if (theme == "dark") {
      setTheme("light");
      setBorderTheme("border-light");
      setColor("light-color");
      setThemeEtiqueta("light-etiqueta");
      setButtonStyle("button-light")
      return;
    }
    setTheme("dark");
    setBorderTheme("border-dark");
    setColor("dark-color");
    setThemeEtiqueta("dark-etiqueta");
    setButtonStyle("button-dark")
  };

  const handleHome = () => {
    setEtiquetaSelecion("");
  };

  const nada = () => {}

  return (
    <div className={`navbar-container ${theme}`}>
      {/* <h2 className="title">Etiquetas</h2> */}
      <div className={`navbar`}>
        <div
          onClick={active ? nada : handleHome}
          className={`${themeEtiqueta} ${active ? "" : "et"} etiqueta-title`}
        >
          Notas
        </div>
        {etiquetasArray.map((e) => (
          <Etiqueta
            themeEtiqueta={themeEtiqueta}
            setEtiquetaSelecion={setEtiquetaSelecion}
            key={e.id}
            etiqueta={e.etiqueta}
            active={active}
          />
        ))}
      </div>
      <DarkModeToggle
        className="button-dark-mode"
        mode={theme}
        size="sm"
        onChange={handleDarkMode}
      />
    </div>
  );
};

export default Navbar;
