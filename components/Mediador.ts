type Accion = (callback: (texto: string) => string) => void;
type AccionVisibilidad = (callback: (state: boolean) => boolean) => void;

export default class Mediador {
  private acciones: { [key: string]: Accion[] } = {};
  private accionesVisibilidad: AccionVisibilidad[] = [];

  public notificarAccion(
    key: string,
    callback: (texto: string) => string
  ): void {
    if (this.acciones[key]) {
      this.acciones[key].forEach((accion) => accion(callback));
    }
  }

  public notificarAccionVisibilidad(
    callback: (state: boolean) => boolean
  ): void {
    this.accionesVisibilidad.forEach((accion) => accion(callback));
  }

  public cambiarTexto(key: string, action: Accion): void {
    if (!this.acciones[key]) {
      this.acciones[key] = [];
    }
    this.acciones[key].push(action);
  }

  public cambiarVisibilidad(action: AccionVisibilidad): void {
    this.accionesVisibilidad.push(action);
  }
}
