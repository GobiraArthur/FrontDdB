import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChecklistItem } from './../model/checklist.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  private apiUrl = 'http://localhost:8000/api/verificacao';

  constructor(private http: HttpClient) { }

  // Listar todos os itens de verificação
  listar(pag?: number, max_reg_pag?: number, ordenacao?: string, nome?: string): Observable<ChecklistItem[]> {
    let params = new HttpParams();
    if (pag) params = params.set('pag', pag.toString());
    if (max_reg_pag) params = params.set('max_reg_pag', max_reg_pag.toString());
    if (ordenacao) params = params.set('ordenacao', ordenacao);
    if (nome) params = params.set('nome', nome);

    return this.http.get<ChecklistItem[]>(`${this.apiUrl}/`, { params });
  }

  // Buscar item de verificação pelo ID
  buscarPorId(id: number): Observable<ChecklistItem> {
    return this.http.get<ChecklistItem>(`${this.apiUrl}/${id}/`).pipe(
      catchError(error => {
        return throwError(() => new Error(`Erro ao buscar item: ${error.message}`));
      })
    );
  }

  // Criar um novo item de verificação
  criar(item: ChecklistItem): Observable<ChecklistItem> {
    return this.http.post<ChecklistItem>(`${this.apiUrl}/criar/`, item).pipe(
      catchError(error => {
        return throwError(() => new Error(`Erro ao criar item: ${error.message}`));
      })
    );
  }

  // Atualizar um item de verificação existente
  atualizar(id: number, item: ChecklistItem): Observable<ChecklistItem> {
    return this.http.put<ChecklistItem>(`${this.apiUrl}/atualizar/${id}/`, item).pipe(
      catchError(error => {
        return throwError(() => new Error(`Erro ao atualizar item: ${error.message}`));
      })
    );
  }

  // Remover um item de verificação
  remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remover/${id}/`).pipe(
      catchError(error => {
        return throwError(() => new Error(`Erro ao remover item: ${error.message}`));
      })
    );
  }

  // Remover uma lista de itens de verificação
  removerLista(ids: number[]): Observable<void> {
    return this.http.request<void>('delete', `${this.apiUrl}/remover/`, {
      body: { ids }
    }).pipe(
      catchError(error => {
        return throwError(() => new Error(`Erro ao remover lista de itens: ${error.message}`));
      })
    );
  }
}
