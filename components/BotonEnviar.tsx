import { useEffect, useState } from "react";
import Mediador from "./Mediador";

interface Props {
  mediador: Mediador;
  nombre: string;
}

const BotonEnviar = ({ mediador, nombre }: Props) => {
  const [text, setText] = useState("no");

  useEffect(() => {
    mediador.cambiarTexto(nombre, setText);
  }, [mediador]);

  return (
    <button
      className="btn-enviar"
      onClick={(e) => {
        e.preventDefault();

        mediador.notificarAccionVisibilidad(() => true);
      }}
    >
      Iniciar sesión
    </button>
  );
};

export default BotonEnviar;
