import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {

  isOpen = false;

  openMenu() {
    this.isOpen = true;
  }

  closeMenu() {
    this.isOpen = false;
  }
}
