import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelefoneeListComponent } from './components/telefonee/telefonee-list/telefonee-list.component';
import { TelefoneeFormComponent } from './components/telefonee/telefonee-form/telefonee-form.component';
import { ManutencaoFormComponent } from './components/manutencao/manutencao-form/manutencao-form.component';
import { ManutencaoListComponent } from './components/manutencao/manutencao-list/manutencao-list.component';
import { ChecklistFormComponent } from './components/checklist/checklist-form/checklist-form.component';
import { ChecklistListComponent } from './components/checklist/checklist-list/checklist-list.component';

const routes: Routes = [
  {
    path: '',
    component: TelefoneeListComponent,
  },
  { path: 'telefone', component: TelefoneeListComponent },
  { path: 'telefone/form', component: TelefoneeFormComponent },
  { path: 'telefone/form/:id', component: TelefoneeFormComponent },
  { path: 'manutencao', component: ManutencaoListComponent },
  { path: 'manutencao/form', component: ManutencaoFormComponent },
  { path: 'manutencao/form/:id', component: ManutencaoFormComponent },
  { path: 'verificacao', component: ChecklistListComponent},
  { path: 'verificacao/form', component: ChecklistFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
