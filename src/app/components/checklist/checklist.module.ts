import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { ChecklistFormComponent } from './checklist-form/checklist-form.component';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';

@NgModule({
  declarations: [
    ChecklistFormComponent,
    ChecklistListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    ChecklistFormComponent,
    ChecklistListComponent
  ]
})
export class ChecklistModule {}