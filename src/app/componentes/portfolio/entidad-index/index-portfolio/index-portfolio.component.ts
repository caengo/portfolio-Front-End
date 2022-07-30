import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-index-portfolio',
  templateUrl: './index-portfolio.component.html',
  styleUrls: ['./index-portfolio.component.css']
})
export class IndexPortfolioComponent implements OnInit {

  persona: Persona = null;

  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.personaService.detail(id).subscribe(
      data => {
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


}
