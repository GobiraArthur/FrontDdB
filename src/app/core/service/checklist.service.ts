import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChecklistItem } from '../model/checklist.model';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  private apiUrl = 'http://localhost:3000/checklist';  // URL da API do backend (ajuste conforme necessário)

  constructor(private http: HttpClient) {}

  // Método para obter todos os itens do checklist
  getChecklistItems(): Observable<ChecklistItem[]> {
    return this.http.get<ChecklistItem[]>(this.apiUrl);
  }

  // Método para salvar (criar ou atualizar) um item do checklist
  saveChecklist(items: ChecklistItem[]): Observable<any> {
    return this.http.post(this.apiUrl, items);
  }

  // Método para obter um item específico por ID
  getChecklistItemById(id: number): Observable<ChecklistItem> {
    return this.http.get<ChecklistItem>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar um item do checklist
  updateChecklistItem(item: ChecklistItem): Observable<any> {
    return this.http.put(`${this.apiUrl}/${item.id}`, item);
  }

  // Método para excluir um item do checklist
  deleteChecklistItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
