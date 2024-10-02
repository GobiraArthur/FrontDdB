import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChecklistService } from './../../../core/service/checklist.service';
import { ChecklistItem } from './../../../core/model/checklist.model';
import { NotificacaoService, StandardError, TipoNotificacao } from '../../../core/helper/notificacao.service';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  checklistForm = new FormGroup({
    descricao: new FormControl('', [
      Validators.required,
      Validators.maxLength(100) 
    ]),
    status: new FormControl('', [ 
      Validators.required 
    ])
  });

  items: ChecklistItem[] = [];
  itemId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private router: Router,
    private checklistService: ChecklistService
  ) { }

  ngOnInit() {
    this.checklistService.listar().subscribe(data => {
      this.items = data;
    });

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.itemId = +id; // Armazena o ID do item se ele existir
      this.buscarPorId(this.itemId);
    }
  }

  // Buscar item pelo ID
  buscarPorId(id: number): void {
    this.checklistService.buscarPorId(id).subscribe({
      next: checklist => {
        // Preenche o formulário com os dados retornados
        this.checklistForm.patchValue({
          descricao: checklist.descricao,
          status: checklist.status
        });
      },
      error: (e) => {
        this.notificacaoService.showNotificationError(
          e.error as StandardError,
          'Erro ao buscar item de verificação'
        );
      }
    });
  }

  // Navegar de volta à lista de itens
  navegar_listagem(): void {
    this.router.navigate(['']);
  }

  // Submissão do formulário
  onSubmit() {
    const formValue = this.checklistForm.value as ChecklistItem;

    // Verifica se estamos atualizando ou criando um novo item
    if (this.itemId) {
      // Atualizar item existente
      this.checklistService.atualizar(this.itemId, formValue).subscribe({
        next: (data) => {
          this.notificacaoService.openNotificacao(
            {
              mensagem: `O item '${data.descricao}' foi atualizado com sucesso!`,
              titulo: 'Edição concluída!',
            },
            TipoNotificacao.SUCESSO
          );
          this.navegar_listagem();
        },
        error: (e) => {
          this.notificacaoService.showNotificationError(
            e.error as StandardError,
            'Falha ao tentar atualizar item'
          );
        }
      });
    } else {
      // Criar novo item
      this.checklistService.criar(formValue).subscribe({
        next: (data) => {
          this.notificacaoService.openNotificacao(
            {
              mensagem: `Item '${data.descricao}' cadastrado com sucesso!`,
              titulo: 'Sucesso',
            },
            TipoNotificacao.SUCESSO
          );
          this.navegar_listagem();
        },
        error: (e) => {
          this.notificacaoService.showNotificationError(
            e.error as StandardError,
            'Falha ao tentar cadastrar novo item'
          );
        }
      });
    }
  }
}
