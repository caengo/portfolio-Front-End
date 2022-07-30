export class Acercade {
    id?: number;
    acercade: string;
    fechanac: string;
    email: string;
    telefono: string;
    direccion: string;
    idPersona: number;

    constructor(acercade: string, fechanac: string, email: string, telefono: string, direccion: string) {
        this.acercade = acercade;
        this.fechanac = fechanac;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;

    }
}
