import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TelefoneEmergencial } from '../../../core/model/telefone-emergencial.model';
import { TelefoneEmergencialService } from '../../../core/service/telefone-emergencial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacaoService, StandardError, TipoNotificacao } from '../../../core/helper/notificacao.service';

@Component({
  selector: 'app-telefonee-form',
  templateUrl: './telefonee-form.component.html',
  styleUrl: './telefonee-form.component.css'
})
export class TelefoneeFormComponent implements OnInit {

  id_registro: number = 0;

  telefoneForm = new FormGroup({
    descricao: new FormControl(
      '',
      [
        Validators.required,
        Validators.maxLength(50)
      ]
    ),
    numero: new FormControl(
      '',
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern(/^[0-9]+$/)  // Esta regex permite apenas dígitos
      ]
    ),
  });

  constructor(
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private router: Router,
    private telefoneService: TelefoneEmergencialService
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.id_registro = Number(params.get('id'));
      this.buscarPorId(id);
    });
  }

  buscarPorId(id: number): void {
    if(id !== 0){

      this.telefoneService.buscarPorId(id).subscribe(
        telefone => {
          this.id_registro = telefone.id;
          this.telefoneForm.patchValue({
            descricao: telefone.descricao,
            numero: telefone.numero,
          });
        }
      );
    }
    
  }

  navegar_listagem(): void {
    this.router.navigate(['']);
  }

  onSubmit() {

    if (this.id_registro !== 0) {

      this.telefoneService.atualizar(this.id_registro, this.telefoneForm.value as TelefoneEmergencial)
        .subscribe({
          next: (data) => {
            this.notificacaoService.openNotificacao(
              {
                mensagem: `O contato '${data.descricao}' foi atualizado com sucesso!`,
                titulo: 'Edição concluída!',
              },
              TipoNotificacao.SUCESSO
            );
            this.navegar_listagem();
          },
          error: (e) => {
            this.notificacaoService.showNotificationError(
              e.error as StandardError,
              'Falha ao tentar atualizar telefone!'
            );
          }
        });
    } else {
      this.telefoneService.criar(this.telefoneForm.value as TelefoneEmergencial)
        .subscribe({
          next: (data) => {
            this.notificacaoService.openNotificacao(
              {
                mensagem: `Telefone (${data.numero}) cadastrado com sucesso!`,
                titulo: 'Sucesso',
              },
              TipoNotificacao.SUCESSO
            );
            this.navegar_listagem();
          },
          error: (e) => {
            this.notificacaoService.showNotificationError(
              e.error as StandardError,
              'Falha ao tentar cadastrar telefone!'
            );
          }
        });
    }

  }

}
