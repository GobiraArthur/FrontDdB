import { Component, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen; 
  }
}

