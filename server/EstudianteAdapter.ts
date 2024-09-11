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
      .toLowerCase()}${
      this.estudianteAntiguo.apellido.toLowerCase().split(" ")[0]
    }@unisimon.edu.co`;
    const periodoActual = new Date().getMonth() >= 7 ? 2 : 1;
    const semestreActual =
      (new Date().getFullYear() - this.estudianteAntiguo.anioIngreso) * 2 +
      (periodoActual - (Number(this.estudianteAntiguo.periodoIngreso) - 1));

    return {
      nombreCompleto,
      correoElectronico,
      semestreActual,
    };
  }
}
