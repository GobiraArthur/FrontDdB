import { Component, OnInit } from '@angular/core';
import { PagManutencao } from '../../../core/model/pag-manutencao.model';
import { FormControl, FormGroup } from '@angular/forms';
import { ManutencaoService } from '../../../core/service/manutencao.service';
import { NotificacaoService, StandardError, TipoNotificacao } from '../../../core/helper/notificacao.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogConfirmacaoComponent } from '../../shared/dialog-confirmacao/dialog-confirmacao.component';
import { Manutencao } from '../../../core/model/manutencao.model';


@Component({
  selector: 'app-manutencao-list',
  templateUrl: './manutencao-list.component.html',
  styleUrl: './manutencao-list.component.css'
})
export class ManutencaoListComponent implements OnInit {

  manutencoes: PagManutencao = new PagManutencao();

  manutencaoForm = new FormGroup({
    nome : new FormControl(),
    pag: new FormControl(),
    ordenacao: new FormControl('id')
  
  });

  constructor(
  private dialog: MatDialog,
  private notificacaoService: NotificacaoService,
  private router: Router,
  private manutencaoService: ManutencaoService
) { }

  ngOnInit(): void {
    this.listar()
  }
  listar(): void {
    this.manutencaoService.listar(this.manutencaoForm.value)
      .subscribe(manutencao => {
        this.manutencoes = manutencao
      });
  }

  limparFiltros(): void {
    this.manutencaoForm.reset();
    this.listar();
  }

  onPaginadorClicked(pag_selecionada: number): void {
    this.manutencaoForm.patchValue({ pag: pag_selecionada });
    this.manutencaoService.listar(this.manutencaoForm.value)
      .subscribe(
        {
          next: (manutencoes) => {
            this.manutencoes = manutencoes
          },
          error: (e) => {
            this.notificacaoService.showNotificationError(
              e.error as StandardError,
              'Falha ao listar manutenções'
            );
          }
        }
      );

  }

  navegar_edição(id: number): void {
    this.router.navigate(['/manutencao/form', id]);
  }
  navegar_cadastro(): void {
    this.router.navigate(['/manutencao/form']);
  }
  removerRegistro(registro: Manutencao): void {

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
        this.manutencaoService.remover(registro.id)
          .subscribe({
            next: (data) => {
              this.notificacaoService.openNotificacao(
                {
                  titulo: 'Sucesso',
                  mensagem: 'Manutenção removida com sucesso',
                },
                TipoNotificacao.SUCESSO
              );
              this.listar();
            },
            error: (e) => {
              this.notificacaoService.showNotificationError(
                e.error as StandardError,
                'Falha ao tentar remover manutenção'
              );
            },
          });
      }
    });
  }
}
