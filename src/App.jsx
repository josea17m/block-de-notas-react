import { useState } from "react";
import Navbar from "./components/Navbar";
import InputNotes from "./components/InputNotes";
import Notes from "./components/Notes";
import Modal from "./Modal";

function App() {
  const [notas, setNotas] = useState("");
  const [etiquetas, setEtiquetas] = useState("");
  const [etiquetaSelecion, setEtiquetaSelecion] = useState("");

  const [theme, setTheme] = useState("dark");
  const [borderTheme, setBorderTheme] = useState("border-dark");
  const [color, setColor] = useState("dark-color");
  const [themeEtiqueta, setThemeEtiqueta] = useState("dark-etiqueta");
  const [buttonStyle, setButtonStyle] = useState("button-dark");

  const [active, setActive] = useState(false);

  const [notaEditar, setNotaEditar] = useState({});

  const screenW = screen.width;

  const eliminarNota = (id) => {
    const notasActualizadas = notas.filter((n) => n.id !== id);
    setNotas(notasActualizadas);
    setActive(false);
  };

  const notaSave = (n) => {
    const notasActualizados = notas.map((notaState) =>
      notaState.id === n.id ? n : notaState
    );
    setNotas(notasActualizados);
    setNotaEditar({});
  };

  return (
    <main className={`main-container ${theme}`}>
      <Navbar
        etiquetas={etiquetas}
        etiquetaSelecion={etiquetaSelecion}
        setEtiquetaSelecion={setEtiquetaSelecion}
        active={active}
        theme={theme}
        setTheme={setTheme}
        borderTheme={borderTheme}
        setBorderTheme={setBorderTheme}
        setColor={setColor}
        themeEtiqueta={themeEtiqueta}
        setThemeEtiqueta={setThemeEtiqueta}
        setButtonStyle={setButtonStyle}
      />

      <div
        className={`notes-container ${theme} ${
          notas.length == 0
            ? "vh-100"
            : screenW < 376
            ? notas.length < 3
              ? "vh-100"
              : "percent-100"
            : screenW < 650
            ? notas.length < 3
              ? "vh-100"
              : "percent-100"
            : screenW < 915
            ? notas.length < 4
              ? "vh-100"
              : "percent-100"
            : notas.length < 9
            ? "vh-100"
            : "percent-100"
        }`}
      >
        <InputNotes
          setEtiquetas={setEtiquetas}
          etiquetas={etiquetas}
          notas={notas}
          setNotas={setNotas}
          active={active}
          theme={theme}
          borderTheme={borderTheme}
          color={color}
          buttonStyle={buttonStyle}
        />
        <Notes
          etiquetaSelecion={etiquetaSelecion}
          setEtiquetaSelecion={setEtiquetaSelecion}
          notas={notas}
          setActive={setActive}
          setNotaEditar={setNotaEditar}
          theme={theme}
          borderTheme={borderTheme}
          color={color}
        />
      </div>
      {Object.keys(notaEditar).length > 0 && (
        <Modal
          notaSave={notaSave}
          active={active}
          notaEditar={notaEditar}
          setActive={setActive}
          eliminarNota={eliminarNota}
          borderTheme={borderTheme}
          theme={theme}
          buttonStyle={buttonStyle}
          color={color}
          themeEtiqueta={themeEtiqueta}
        />
      )}
    </main>
  );
}

export default App;
