import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export { Page };

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const [estudianteNuevo, setEstudianteNuevo] = useState<any>(null);

  const getSemestre = () => {
    {
      if (estudianteNuevo.semestreActual > 10) {
        return "Carrera terminada";
      } else {
        return estudianteNuevo.semestreActual + "";
      }
    }
  };

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch("/convertir", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
    setEstudianteNuevo(responseData);
    console.log(new Date().getFullYear());
    reset();
  };

  return (
    <form
      className="container center-screen"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <h2>Formulario estudiante</h2>
      <div className="input-container">
        <input
          {...register("nombre", {
            required: "Ingrese un nombre",
            maxLength: { value: 50, message: "Nombre muy largo" },
          })}
          placeholder="Nombre"
        />
        {errors.nombre && (
          <p className="error-message">{`${errors.nombre.message}`}</p>
        )}
      </div>
      <div className="input-container">
        <input
          {...register("apellido", {
            required: "Ingrese un apellido",
            maxLength: { value: 50, message: "Apellido muy largo" },
          })}
          placeholder="Apellido"
        />
        {errors.apellido && (
          <p className="error-message">{`${errors.apellido.message}`}</p>
        )}
      </div>
      <div className="input-container">
        <input
          {...register("anioIngreso", {
            required: "Ingrese un año de ingreso",
            min: { value: 1940, message: "Año inválido" },
            max: { value: new Date().getFullYear(), message: "Año inválido" },
          })}
          placeholder="Año ingreso"
          type="number"
        />
        {errors.anioIngreso && (
          <span className="error-message">{`${errors.anioIngreso.message}`}</span>
        )}
      </div>
      <select {...register("periodoIngreso", { required: true })}>
        <option value="1">Primer periodo</option>
        <option value="2">Segundo periodo</option>
      </select>
      <button className="btn-enviar" type="submit">
        Aceptar
      </button>
      {estudianteNuevo && (
        <div>
          <h3>Datos del Estudiante en el Nuevo Sistema</h3>
          <p>Nombre Completo: {estudianteNuevo.nombreCompleto}</p>
          <p>Correo Electrónico: {estudianteNuevo.correoElectronico}</p>
          <p>Semestre Actual: {getSemestre()}</p>
        </div>
      )}
    </form>
  );
}
