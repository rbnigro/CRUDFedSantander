import { Usuario } from './../models/usuarios';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'http://localhost:8080/usuarios/';

  constructor(private http: HttpClient) {}

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}consulta/${id}`);
  }

  atualizar(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}editar/${id}`, usuario);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}delete/${id}`);
  }

  incluir(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiUrl}incluir/`, usuario);
  }
}
