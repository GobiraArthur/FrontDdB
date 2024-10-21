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
  
  id_registro: number = 0;

    checklistForm = new FormGroup({
    nome: new FormControl(
      '',
      [
        Validators.required,
        Validators.maxLength(50)
      ]
    ),
  });
 
  constructor(
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private router: Router,
    private checklistService: ChecklistService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')) ?? 0;
      this.id_registro = id;
      if (id !== 0) {
        this.buscarPorId(id);
      }
    });
  }

  buscarPorId(id: number): void {
    if (id !== 0) {
      this.checklistService.buscarPorId(id).subscribe(
        checklist => {
          this.id_registro = checklist.id ?? 0;
          this.checklistForm.patchValue({
            nome: checklist.descricao,
          });
        }
      );
    }
  }
  navegar_listagem(): void {
    this.router.navigate(['/verificacao']);
  }
  onSubmit() {
    if (this.id_registro !== 0) {
      this.checklistService.atualizar(this.id_registro, this.checklistForm.value as ChecklistItem).subscribe({
        next: (data) => {
          this.notificacaoService.openNotificacao(
            {
              mensagem: `Item (${data.descricao}) atualizado com sucesso!`,
              titulo: 'Sucesso',
            },
            TipoNotificacao.SUCESSO
          );
          this.navegar_listagem();
        },
        error: (e) => {
          this.notificacaoService.showNotificationError(
            e.error as StandardError,
            "Falha ao tentar atualizar manutenção!"
          );
        }
      });
    } else {
      this.checklistService.criar(this.checklistForm.value as ChecklistItem).subscribe({
        next: (data) => {
          this.notificacaoService.openNotificacao(
            {
              mensagem: `Item (${data.descricao}) cadastrado com sucesso!`,
              titulo: 'Sucesso',
            },
            TipoNotificacao.SUCESSO
          );
          this.navegar_listagem();
        },
        error: (e) => {
          this.notificacaoService.showNotificationError(
            e.error as StandardError,
            "Falha ao tentar cadastrar item!"
          );
        }
      });
    }
  }
}