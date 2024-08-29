import { useEffect, useState } from "react";
import Mediador from "./Mediador";

interface Props {
  mediador: Mediador;
  nombreInput: string;
}

const MostrarTexto = ({ mediador, nombreInput }: Props) => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    mediador.cambiarTexto(nombreInput, setText);
    mediador.cambiarVisibilidad(setIsVisible);
  }, [mediador]);

  if (!isVisible) return null;

  return (
    <p>
      {nombreInput}: {text}
    </p>
  );
};

export default MostrarTexto;
