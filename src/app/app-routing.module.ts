import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { IndexPortfolioComponent } from './componentes/portfolio/entidad-index/index-portfolio/index-portfolio.component';
import { IndexEditPortfolioComponent } from './componentes/portfolio/entidad-index/index-edit-portfolio/index-edit-portfolio.component';
import { FormEditPersonaComponent } from './componentes/portfolio/entidad-inicio/form-edit-persona/form-edit-persona.component';
import { EncabezadoComponent } from './componentes/portfolio/entidad-encabezado/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/portfolio/entidad-acercade/acerca-de/acerca-de.component';
import { LoginComponent } from './componentes/user-auth/login/login.component';
import { RegistrarComponent } from './componentes/user-auth/registrar/registrar.component';
import { MenuPortfolioComponent } from './componentes/user-auth/menu-portfolio/menu-portfolio.component';
import { MenuIndexComponent } from './componentes/user-auth/menu-index/menu-index.component';
import { LoginGuard } from './componentes/user-auth/guards/login.guard';
import { FormEditAcercadeComponent } from './componentes/portfolio/entidad-acercade/form-edit-acercade/form-edit-acercade.component';
import { FormListExperienciaComponent } from './componentes/portfolio/entidad-experiencia/form-list-experiencia/form-list-experiencia.component';
import { FormCreateExperienciaComponent } from './componentes/portfolio/entidad-experiencia/form-create-experiencia/form-create-experiencia.component';
import { FormEditExperienciaComponent } from './componentes/portfolio/entidad-experiencia/form-edit-experiencia/form-edit-experiencia.component';
import { EducacionComponent } from './componentes/portfolio/entidad-educacion/educacion/educacion.component';
import { EducacionEditComponent } from './componentes/portfolio/entidad-educacion/educacion-edit/educacion-edit.component';
import { FormEditEducacionComponent } from './componentes/portfolio/entidad-educacion/form-edit-educacion/form-edit-educacion.component';
import { SerciciosEditComponent } from './componentes/portfolio/entidad-servicios/sercicios-edit/sercicios-edit.component';
import { MiServiciosComponent } from './componentes/portfolio/entidad-servicios/mi-servicios/mi-servicios.component';
import { MiProyectosComponent } from './componentes/portfolio/entidad-proyectos/mi-proyectos/mi-proyectos.component';
import { ProyectosEditComponent } from './componentes/portfolio/entidad-proyectos/proyectos-edit/proyectos-edit.component';
import { ContactoComponent } from './componentes/portfolio/entidad-contacto/contacto/contacto.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', component: MenuIndexComponent },
  { path: 'login', component: LoginComponent }, //, canActivate: [LoginGuard]
  { path: 'registrar', component: RegistrarComponent },
  { path: 'p/:id', component: IndexPortfolioComponent },
  { path: 'p/:id/edit', component: IndexEditPortfolioComponent },
  { path: 'p/:id/edit/persona', component: FormEditPersonaComponent },
  { path: 'p/:idPersona/edit/acercade', component: FormEditAcercadeComponent },
  { path: 'p/:idPersona/edit/experiencias', component: FormListExperienciaComponent },
  { path: 'p/:idPersona/edit/experiencias/crear', component: FormCreateExperienciaComponent },
  { path: 'p/:idPersona/edit/experiencias/:id', component: FormEditExperienciaComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'educacion/edit', component: EducacionEditComponent },
  { path: 'servicios', component: MiServiciosComponent },
  { path: 'servicios/edit', component: SerciciosEditComponent },
  { path: 'proyectos', component: MiProyectosComponent },
  { path: 'proyectos/edit', component: ProyectosEditComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
