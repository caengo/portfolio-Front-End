export class Persona {
   id?: number;
   nombre: string;
   apellido: string;
   profesion: string;
   resenia: string;
   imagen: string;
   idUsuario: number;


   constructor(nombre: string, apellido: string, profesion: string, resenia: string, imagen: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.profesion = profesion;
      this.resenia = resenia;
      this.imagen = imagen;

   }

}
