import { Component } from '@angular/core';
import { ChecklistService } from '../../../core/service/checklist.service'; 
import { ChecklistItem} from '../../../core/model/checklist.model'; 

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent {
  checklistItem: ChecklistItem = new ChecklistItem();

  constructor(private checklistService: ChecklistService) {}

  // Função chamada ao submeter o formulário
  onSubmit() {
    this.checklistService.saveChecklist([this.checklistItem]).subscribe(response => {
      console.log('Item salvo com sucesso!', response);
      // Lógica adicional, como redirecionar ou exibir mensagem de sucesso
    }, error => {
      console.log('Erro ao salvar o item.', error);
    });
  }
}
