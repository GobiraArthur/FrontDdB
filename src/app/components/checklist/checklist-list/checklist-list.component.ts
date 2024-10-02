import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '../../../core/service/checklist.service';
import { ChecklistItem } from '../../../core/model/checklist.model';
import { Router } from '@angular/router';
import { DialogConfirmacaoComponent } from '../../shared/dialog-confirmacao/dialog-confirmacao.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificacaoService, StandardError, TipoNotificacao } from '../../../core/helper/notificacao.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.css']
})
export class ChecklistListComponent implements OnInit {

  checklist: ChecklistItem[] = []; // Array de ChecklistItem
  checklistForm = new FormGroup({
    descricao: new FormControl(),
    status: new FormControl(),
  });

  constructor(
    private dialog: MatDialog,
    private notificacaoService: NotificacaoService,
    private router: Router,
    private checklistService: ChecklistService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.checklistService.listar().subscribe(data => {
        this.checklist = data;
      });
  }

  limparFiltros(): void {
    this.checklistForm.reset();
    this.listar();
  }

  navegar_edicao(id: number): void {
    this.router.navigate(['/checklist/form', id]);
  }

  navegar_cadastro(): void {
    this.router.navigate(['/checklist/form']);
  }

  removerRegistro(registro: ChecklistItem): void {
    if (registro.id != null) { // Verifica se o ID não é null ou undefined
      this.checklistService.remover(registro.id).subscribe({
        next: (data) => {
          this.notificacaoService.openNotificacao(
            {
              titulo: 'Sucesso',
              mensagem: 'Item removido com sucesso',
            },
            TipoNotificacao.SUCESSO
          );
          this.listar(); // Recarrega a lista após remoção
        },
        error: (e) => {
          this.notificacaoService.showNotificationError(
            e.error as StandardError,
            'Falha ao tentar remover item'
          );
        }
      });
    } else {
      console.error('ID do registro é indefinido');
    }
  }
}