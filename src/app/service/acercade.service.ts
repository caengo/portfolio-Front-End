import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acercade } from '../models/acercade';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  acercadeURL = environment.acercadeURL;
  personaURL = environment.personaURL;

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }


  public getByPersona(idPersona: number): Observable<Acercade> {
    return this.httpClient.get<Acercade>(`${this.personaURL}/${idPersona}/acercade`);
  }

  public detail(id: number): Observable<Acercade> {
    return this.httpClient.get<Acercade>(this.acercadeURL + `/${id}`);
  }

  public save(acercade: Acercade): Observable<any> {
    return this.httpClient.post<any>(this.acercadeURL, acercade);
  }

  public update(id: number, acercade: Acercade): Observable<any> {
    const headers = this.tokenService.getHeadersWithAuth();
    return this.httpClient.put<any>(this.acercadeURL + `/${id}`, acercade, { headers });
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.acercadeURL + `/${id}`);
  }
}
