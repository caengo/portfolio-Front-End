import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Acercade } from 'src/app/models/acercade';
import { AcercadeService } from 'src/app/service/acercade.service';

@Component({
  selector: 'app-acercade-edit',
  templateUrl: './acercade-edit.component.html',
  styleUrls: ['./acercade-edit.component.css']
})
export class AcercadeEditComponent implements OnInit {

  @Input() idPersona: number = null;
  acercade: Acercade = null;

  constructor(
    private acercadeService: AcercadeService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.idPersona) {
      this.cargarAcercade();
    }
  }

  cargarAcercade(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.acercadeService.getByPersona(this.idPersona).subscribe(
      data => {
        this.acercade = data;
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
