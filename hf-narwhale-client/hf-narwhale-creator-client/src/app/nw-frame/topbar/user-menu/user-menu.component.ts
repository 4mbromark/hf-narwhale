import { UserMenuButtonTag } from './../topbar.config';
import { UserService } from 'src/app/nw-service/user.service';
import { HighFiveUser } from './../../../nw-object/hf/user';
import { Component, OnInit } from '@angular/core';
import { UserMenuButton, USER_MENU_BUTTON_LIST } from '../topbar.config';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public userMenuButtons: UserMenuButton[] = USER_MENU_BUTTON_LIST;

  public user: HighFiveUser;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: HighFiveUser) => {
      this.user = user;
    });
  }

  public performButtonAction(button: UserMenuButton): void {
    if (button.tag) {
      switch (button.tag) {
        case UserMenuButtonTag.LOGOUT: {
          this.userService.logout();
          break;
        }
      }
    }
  }
}
