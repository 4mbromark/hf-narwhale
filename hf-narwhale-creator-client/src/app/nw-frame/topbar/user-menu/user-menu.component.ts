import { UserService } from 'src/app/nw-service/user.service';
import { HighFiveUser } from './../../../nw-object/hf/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public user: HighFiveUser;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: HighFiveUser) => {
      this.user = user;
    });
  }

}
