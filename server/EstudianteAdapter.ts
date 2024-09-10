import { EstudianteAntiguo, EstudianteNuevo } from "../pages/types.js";

export default class EstudianteAdapter {
  private estudianteAntiguo: EstudianteAntiguo;

  constructor(estudianteAntiguo: EstudianteAntiguo) {
    this.estudianteAntiguo = estudianteAntiguo;
  }

  public getEstudianteNuevo(): EstudianteNuevo {
    const nombreCompleto = `${this.estudianteAntiguo.nombre} ${this.estudianteAntiguo.apellido}`;
    const correoElectronico = `${this.estudianteAntiguo.nombre
      .charAt(0)
      .toLowerCase()}${this.estudianteAntiguo.apellido.toLowerCase()}@unisimon.edu.co`;
    const semestreActual =
      (new Date().getFullYear() - this.estudianteAntiguo.anioIngreso) * 2 +
      this.estudianteAntiguo.periodoIngreso;

    return {
      nombreCompleto,
      correoElectronico,
      semestreActual,
    };
  }
}
