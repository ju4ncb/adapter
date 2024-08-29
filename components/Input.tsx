import { useEffect, useState } from "react";
import Mediador from "./Mediador";

interface Props {
  mediador: Mediador;
  nombreInput: string;
}

const Input = ({ mediador, nombreInput }: Props) => {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    mediador.cambiarTexto(nombreInput, setTexto);
  }, [nombreInput, mediador]);

  return (
    <input
      value={texto}
      onChange={(e) =>
        mediador.notificarAccion(nombreInput, () => e.target.value)
      }
    />
  );
};

export default Input;
