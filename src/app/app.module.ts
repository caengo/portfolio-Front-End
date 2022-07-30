import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarComponent } from './componentes/user-auth/registrar/registrar.component';
import { LoginComponent } from './componentes/user-auth/login/login.component';
import { IndexPortfolioComponent } from './componentes/portfolio/entidad-index/index-portfolio/index-portfolio.component';
import { IndexEditPortfolioComponent } from './componentes/portfolio/entidad-index/index-edit-portfolio/index-edit-portfolio.component';
import { EncabezadoComponent } from './componentes/portfolio/entidad-encabezado/encabezado/encabezado.component';
import { InicioPortfolioComponent } from './componentes/portfolio/entidad-inicio/inicio-portfolio/inicio-portfolio.component';
import { InicioEditPortfolioComponent } from './componentes/portfolio/entidad-inicio/inicio-edit-portfolio/inicio-edit-portfolio.component';
import { FormEditPersonaComponent } from './componentes/portfolio/entidad-inicio/form-edit-persona/form-edit-persona.component';
import { AcercaDeComponent } from './componentes/portfolio/entidad-acercade/acerca-de/acerca-de.component';
import { FormEditAcercadeComponent } from './componentes/portfolio/entidad-acercade/form-edit-acercade/form-edit-acercade.component';
import { ExperienciaComponent } from './componentes/portfolio/entidad-experiencia/experiencia/experiencia.component';
import { FormEditExperienciaComponent } from './componentes/portfolio/entidad-experiencia/form-edit-experiencia/form-edit-experiencia.component';
import { MiServiciosComponent } from './componentes/portfolio/entidad-servicios/mi-servicios/mi-servicios.component';
import { FormEditSkillComponent } from './componentes/portfolio/entidad-servicios/form-edit-skill/form-edit-skill.component';
import { MiProyectosComponent } from './componentes/portfolio/entidad-proyectos/mi-proyectos/mi-proyectos.component';
import { FormEditProyectosComponent } from './componentes/portfolio/entidad-proyectos/form-edit-proyectos/form-edit-proyectos.component';
import { EducacionComponent } from './componentes/portfolio/entidad-educacion/educacion/educacion.component';
import { FormEditEducacionComponent } from './componentes/portfolio/entidad-educacion/form-edit-educacion/form-edit-educacion.component';
import { ContactoComponent } from './componentes/portfolio/entidad-contacto/contacto/contacto.component';
import { PiePaginaComponent } from './componentes/portfolio/entidad-footer/pie-pagina/pie-pagina.component';
import { AcercadeEditComponent } from './componentes/portfolio/entidad-acercade/acercade-edit/acercade-edit.component';
import { SerciciosEditComponent } from './componentes/portfolio/entidad-servicios/sercicios-edit/sercicios-edit.component';
import { ProyectosEditComponent } from './componentes/portfolio/entidad-proyectos/proyectos-edit/proyectos-edit.component';
import { ExperienciaEditComponent } from './componentes/portfolio/entidad-experiencia/experiencia-edit/experiencia-edit.component';
import { EducacionEditComponent } from './componentes/portfolio/entidad-educacion/educacion-edit/educacion-edit.component';
import { EncabezadoEditComponent } from './componentes/portfolio/entidad-encabezado/encabezado-edit/encabezado-edit.component';
import { MenuPortfolioComponent } from './componentes/user-auth/menu-portfolio/menu-portfolio.component';
import { MenuIndexComponent } from './componentes/user-auth/menu-index/menu-index.component';
import { FormCreateExperienciaComponent } from './componentes/portfolio/entidad-experiencia/form-create-experiencia/form-create-experiencia.component';
import { FormListExperienciaComponent } from './componentes/portfolio/entidad-experiencia/form-list-experiencia/form-list-experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MiServiciosComponent,
    MiProyectosComponent,
    AcercaDeComponent,
    ContactoComponent,
    PiePaginaComponent,
    EducacionComponent,
    ExperienciaComponent,
    IndexPortfolioComponent,
    InicioPortfolioComponent,
    IndexEditPortfolioComponent,
    InicioEditPortfolioComponent,
    FormEditPersonaComponent,
    LoginComponent,
    RegistrarComponent,
    FormEditExperienciaComponent,
    FormEditEducacionComponent,
    FormEditSkillComponent,
    FormEditProyectosComponent,
    FormEditAcercadeComponent,
    AcercadeEditComponent,
    SerciciosEditComponent,
    ProyectosEditComponent,
    ExperienciaEditComponent,
    EducacionEditComponent,
    EncabezadoEditComponent,
    MenuPortfolioComponent,
    MenuIndexComponent,
    FormCreateExperienciaComponent,
    FormListExperienciaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
