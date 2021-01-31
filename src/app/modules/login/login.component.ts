import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { RespDataI } from 'src/app/common/models/graphql.interface';
import { AuthService } from 'src/app/common/services/auth.service';
import { CREATE_USER } from "../../common/qraphql/user/user.mutation";
import { SignUpI } from '../../common/models/user.interface';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public isLoginState: boolean = true;

  email = 'email@gmail.com';
  name = null;

  constructor(
    private readonly apolloProvider: Apollo,
    private readonly router: Router,
    private readonly auth: AuthService,
  ) { }

  public onSwitchToSignUp(data): void {
    this.isLoginState = data;
  }

  onClick() {
    this.apolloProvider.mutate({
      mutation: CREATE_USER,
      variables: {
        name: this.name,
        email: this.email,
      }
    })
    .subscribe((resp: RespDataI<SignUpI>) => {
      if (resp?.data.signUp?.id) {
        const newUser = resp.data.signUp;
        this.auth.login(newUser);
        this.router.navigate(['chat']);
      }
    });
  }

  onInput(event) {
    this.email = event.target.value;
  }

  onInputName(event) {
    this.name = event.target.value;
  }

}
