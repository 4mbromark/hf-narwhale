import { NavbarButton, NAVBAR_BUTTON_LIST } from './navbar.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarButtons: NavbarButton[] = NAVBAR_BUTTON_LIST;

  public selectedButton: NavbarButton = this.navbarButtons[0];

  constructor() { }

  ngOnInit(): void {
  }

  public setSelectedButton(button: NavbarButton): void {
    this.selectedButton = button;
  }
}
