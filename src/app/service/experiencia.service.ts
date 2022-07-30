import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = environment.experienciaURL;
  personaURL = environment.personaURL;

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }

  public getListByPersona(idPersona: number): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(`${this.personaURL}/${idPersona}/experiencias`);
  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + `/${id}`);
  }

  public save(acercade: Experiencia): Observable<any> {
    const headers = this.tokenService.getHeadersWithAuth();
    return this.httpClient.post<any>(this.experienciaURL, acercade, { headers });
  }

  public update(id: number, acercade: Experiencia): Observable<any> {
    const headers = this.tokenService.getHeadersWithAuth();
    return this.httpClient.put<any>(this.experienciaURL + `/${id}`, acercade, { headers });
  }

  public delete(id: number): Observable<any> {
    const headers = this.tokenService.getHeadersWithAuth();
    return this.httpClient.delete<any>(this.experienciaURL + `/${id}`, { headers });
  }
}
