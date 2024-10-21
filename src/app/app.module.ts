import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelefoneeModule } from './components/telefonee/telefonee.module';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogConfirmacaoComponent } from './components/shared/dialog-confirmacao/dialog-confirmacao.component';
import { NotificacaoComponent } from './components/shared/notificacao/notificacao.component';
import { MenuLateralComponent } from './components/shared/menu-lateral/menu-lateral.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ManutencaoModule } from './components/manutencao/manutencao.module';
import { FormsModule } from '@angular/forms';  
import { ChecklistModule } from './components/checklist/checklist.module';

@NgModule({
  declarations: [
    AppComponent,
    DialogConfirmacaoComponent,
    NotificacaoComponent,
    MenuLateralComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    TelefoneeModule,
    ManutencaoModule,
    FormsModule,
    ChecklistModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
