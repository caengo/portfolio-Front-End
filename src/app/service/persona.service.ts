import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaURL = environment.personaURL;

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }


  public getByUser(userId: number): Observable<Persona> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userId", userId.toString());
    return this.httpClient.get<Persona>(this.personaURL, { params: queryParams });
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + `/${id}`);
  }

  public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.personaURL, persona);
  }

  public update(id: number, persona: Persona): Observable<any> {
    const headers = this.tokenService.getHeadersWithAuth();
    return this.httpClient.put<any>(this.personaURL + `/${id}`, persona, { headers });
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.personaURL + `/${id}`);
  }

}
