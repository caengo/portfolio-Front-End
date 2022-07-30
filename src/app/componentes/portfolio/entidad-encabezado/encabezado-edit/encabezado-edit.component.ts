import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-encabezado-edit',
  templateUrl: './encabezado-edit.component.html',
  styleUrls: ['./encabezado-edit.component.css']
})
export class EncabezadoEditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
