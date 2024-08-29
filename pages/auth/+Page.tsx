import { useState } from "react";
import Input from "../../components/Input";
import Mediador from "../../components/Mediador";
import MostrarTexto from "../../components/MostrarTexto";
import BotonEnviar from "../../components/BotonEnviar";

export { Page };

function Page() {
  const mediador = new Mediador();
  return (
    <article className="auth-container center-screen">
      <h1 className="center">Inicio sesion</h1>
      <form className="auth-form">
        <div>
          <label>Usuario</label>
          <Input nombreInput={"Usuario"} mediador={mediador} />
        </div>
        <div>
          <label>Contraseña</label>
          <Input nombreInput={"Contraseña"} mediador={mediador} />
        </div>
        <BotonEnviar nombre={"BotonEnviar"} mediador={mediador} />
        <MostrarTexto nombreInput={"Usuario"} mediador={mediador} />
        <MostrarTexto nombreInput={"Contraseña"} mediador={mediador} />
      </form>
      <br />
    </article>
  );
}
