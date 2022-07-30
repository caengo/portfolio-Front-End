import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { UsuarioVista } from 'src/app/models/usuario-vista';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-index-edit-portfolio',
  templateUrl: './index-edit-portfolio.component.html',
  styleUrls: ['./index-edit-portfolio.component.css']
})
export class IndexEditPortfolioComponent implements OnInit {
  usuario: UsuarioVista = null;
  persona: Persona = null;

  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
    const id = this.activatedRoute.snapshot.params["id"];
    this.personaService.detail(id).subscribe(
      data => {
        if (data.idUsuario !== this.usuario.id) {
          return this.redirectLogin();
        }
        this.persona = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/lista']);
      }
    );
  }

  redirectLogin(): void {
    this.router.navigate(['/login']);
  }
}
