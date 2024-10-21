import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '../../../core/service/checklist.service';
import { ChecklistItem } from '../../../core/model/checklist.model';
import { Router } from '@angular/router';
import { DialogConfirmacaoComponent } from '../../shared/dialog-confirmacao/dialog-confirmacao.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificacaoService, StandardError, TipoNotificacao } from '../../../core/helper/notificacao.service';
import { FormControl, FormGroup } from '@angular/forms';
import { PagChecklist } from '../../../core/model/pag-checklist.model';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.css']
})
export class ChecklistListComponent implements OnInit {

  items: PagChecklist = new PagChecklist();

    checklistForm = new FormGroup({
    descricao: new FormControl(),
    status: new FormControl(),
    pag: new FormControl(),
    ordenacao: new FormControl('id')
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
    this.checklistService.listar(this.checklistForm.value)
    .subscribe(data => {
        this.items = data;
      });
  }

  limparFiltros(): void {
    this.checklistForm.reset();
    this.listar();
  }

  onPaginadorClicked(pag_selecionada: number): void {
    this.checklistForm.patchValue({ pag: pag_selecionada });
    this.checklistService.listar(this.checklistForm.value)
      .subscribe(
        {
          next: (items) => {
            this.items = items
          },
          error: (e) => {
            this.notificacaoService.showNotificationError(
              e.error as StandardError,
              'Falha ao listar itens!'
            );
          }
        }
      );

  }

  navegar_edicao(id: number): void {
    if (id !== undefined){
    this.router.navigate(['verificacao/form', id]);
    }
  }

  navegar_cadastro(): void {
    this.router.navigate(['verificacao/form']);
  }

  removerRegistro(registro: ChecklistItem): void {

    const dialogRef = this.dialog.open(DialogConfirmacaoComponent, {
      width: '30%',
      data: {
        titulo: 'Confirmação',
        mensagem: 'Deseja realmente excluir?',
      },
      panelClass: 'dialog-no-padding',
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        // Verifica se o id é válido antes de tentar remover
        const idRegistro = registro.id ?? 0;  // Usa 0 se 'registro.id' for undefined
        if (idRegistro !== 0) {
          this.checklistService.remover(idRegistro)
            .subscribe({
              next: (data) => {
                this.notificacaoService.openNotificacao(
                  {
                    titulo: 'Sucesso',
                    mensagem: 'Item removido com sucesso!',
                  },
                  TipoNotificacao.SUCESSO
                );
                this.listar();
              },
              error: (e) => {
                this.notificacaoService.showNotificationError(
                  e.error as StandardError,
                  'Falha ao tentar remover itens!'
                );
              },
            });
        } else {
          this.notificacaoService.openNotificacao(
            {
              titulo: 'Erro',
              mensagem: 'ID do item inválido!',
            },
            TipoNotificacao.ERRO
          );
        }
      }
    });
  }
}