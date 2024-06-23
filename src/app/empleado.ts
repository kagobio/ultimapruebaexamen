export class Empleado {
  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
    public puesto: string,
    public telefono: string,
    public remoto: boolean = false,
    public avatar: string = ' '
  ) {}
}
