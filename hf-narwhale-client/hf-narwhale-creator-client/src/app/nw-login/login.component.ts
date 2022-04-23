import { LanguageLabel } from './../nw-language/language-label';
import { UserService } from 'src/app/nw-service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { BaseComponent } from '../nw-common/base-component/base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

  public hide = true;
  public error = null;

  public username = new FormControl('');
  public password = new FormControl('');

  constructor(
    private userService: UserService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  public login(): void {
    this.userService.login(this.username.value, this.password.value).then(
    () => {

    }).catch((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401: {
          break;
        }
        case 404: {
          break;
        }
        default: {

        }
      }
      // this.openLoginResultWindow();
    });
  }

}
