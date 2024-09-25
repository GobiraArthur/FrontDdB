import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutencaoFormComponent } from './manutencao-form/manutencao-form.component';
import { ManutencaoListComponent } from './manutencao-list/manutencao-list.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginadorComponent } from '../shared/paginador/paginador.component';



@NgModule({
  declarations: [
    ManutencaoFormComponent,
    ManutencaoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PaginadorComponent
  ]
})
export class ManutencaoModule { }

