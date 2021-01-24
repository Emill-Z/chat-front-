import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public isLoginState: boolean = true;

  constructor() { }

  public onSwitchToSignUp(data): void {
    this.isLoginState = data;
  }

  onClick() {
    // Implement graphql login
  }

  onInput(event) {
    const login = event.target.value;
  }


}
