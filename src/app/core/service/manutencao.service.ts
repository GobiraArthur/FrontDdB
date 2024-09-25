import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manutencao } from '../model/manutencao.model';
import { PagManutencao } from '../model/pag-manutencao.model';



@Injectable({
    providedIn: 'root'
})
export class ManutencaoService {

    private apiUrl = 'http://localhost:8000/api/necessidade';

    constructor(private http: HttpClient) { }

    listar(filtro: { [key: string]: any }): Observable<PagManutencao> {
        let params = new HttpParams();
        console.log(filtro);

        Object.keys(filtro).forEach(key => {
            const value = filtro[key];
            if (value !== null && value !== undefined) {
                params = params.set(key, value.toString());
            }
        });

        return this.http.get<PagManutencao>(
            `${this.apiUrl}/`,
            { params }
        );
    }

    buscarPorId(id: number): Observable<Manutencao> {
        return this.http.get<Manutencao>(
            `${this.apiUrl}/${id}/`
        );
    }

    criar(manutencao: Manutencao): Observable<Manutencao> {
        return this.http.post<Manutencao>(
            `${this.apiUrl}/criar/`,
            manutencao
        );
    }

    atualizar(id: number, manutencao: Manutencao): Observable<Manutencao> {
        return this.http.put<Manutencao>(
            `${this.apiUrl}/atualizar/${id}/`,
            manutencao
            
        );
    }

    remover(id: number): Observable<void> {
        return this.http.delete<void>(
            `${this.apiUrl}/remover/${id}/`
        );
    }

    removerLista(ids: number[]): Observable<void> {
        return this.http.request<void>(
            'delete', `${this.apiUrl}/remover/`,
            { body: { ids } }
        );
    }

}
