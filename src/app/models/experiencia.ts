
export class Experiencia {

    id?: number;
    fechaInicio: String;
    fechaFinal: String;
    nombre: String;
    resenia: String;
    cargo: String;
    descripcion: String;
    referencia: String;
    idPersona: number;

    constructor(fechaInicio: string, fechaFinal: string, nombre: String, resenia: String, cargo: String, descripcion: String, referencia: String) {

        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.nombre = nombre;
        this.resenia = resenia;
        this.cargo = cargo;
        this.descripcion = descripcion;
        this.referencia = referencia;

    }
}
