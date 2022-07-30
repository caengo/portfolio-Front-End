import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-inicio-edit-portfolio',
  templateUrl: './inicio-edit-portfolio.component.html',
  styleUrls: ['./inicio-edit-portfolio.component.css']
})
export class InicioEditPortfolioComponent implements OnInit {

  @Input() persona: Persona = null;

  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }


}
