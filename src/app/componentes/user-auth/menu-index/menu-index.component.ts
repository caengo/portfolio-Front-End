import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { UsuarioVista } from 'src/app/models/usuario-vista';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-menu-index',
  templateUrl: './menu-index.component.html',
  styleUrls: ['./menu-index.component.css']
})
export class MenuIndexComponent implements OnInit {

  usuario: UsuarioVista;
  persona: Persona = null;

  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router
  ) { }
  ngOnInit() {
    this.verificarUsuario();
    if (this.usuario) {
      this.cargarPersona();
    }
  }

  verificarUsuario(): void {

    if (!this.tokenService.isLogged()) {
      return this.redirectLogin();
    }
    this.usuario = this.tokenService.getUserView();
  }

  cargarPersona(): void {
    this.personaService.getByUser(this.usuario.id).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.redirectLogin();
      }
    );
  }

  redirectLogin(): void {
    this.router.navigate(['/login']);
  }

}
