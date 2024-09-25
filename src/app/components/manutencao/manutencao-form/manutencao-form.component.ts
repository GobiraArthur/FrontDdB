import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Manutencao } from '../../../core/model/manutencao.model';
import { ManutencaoService } from '../../../core/service/manutencao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacaoService, StandardError, TipoNotificacao } from '../../../core/helper/notificacao.service';

@Component({
  selector: 'app-manutencao-form',
  templateUrl: './manutencao-form.component.html',
  styleUrl: './manutencao-form.component.css'
})
export class ManutencaoFormComponent implements OnInit {

  id_registro: number = 0;

  manutencaoForm = new FormGroup({
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
    private manutencaoService: ManutencaoService
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.id_registro = Number(params.get('id'));
      this.buscarPorId(id);
    });
  }

  buscarPorId(id: number): void {
    if (id !== 0) {
      this.manutencaoService.buscarPorId(id).subscribe(
        manutencao => {
          this.id_registro = manutencao.id;
          this.manutencaoForm.patchValue({
            nome: manutencao.nome,
          });
        }
      );
    }
  }
  navegar_listagem(): void {
    this.router.navigate(['/manutencao']);
  }
  onSubmit() {
    if (this.id_registro !== 0) {
      this.manutencaoService.atualizar(this.id_registro, this.manutencaoForm.value as Manutencao).subscribe({
        next: (data) => {
          this.notificacaoService.openNotificacao(
            {
              mensagem: `Manutenção (${data.nome}) atualizado com sucesso!`,
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
      this.manutencaoService.criar(this.manutencaoForm.value as Manutencao).subscribe({
        next: (data) => {
          this.notificacaoService.openNotificacao(
            {
              mensagem: `Manutenção (${data.nome}) cadastrado com sucesso!`,
              titulo: 'Sucesso',
            },
            TipoNotificacao.SUCESSO
          );
          this.navegar_listagem();
        },
        error: (e) => {
          this.notificacaoService.showNotificationError(
            e.error as StandardError,
            "Falha ao tentar cadastrar manutenção!"
          );
        }
      });
    }
  }
}