import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'login-switcher',
  templateUrl: './login-switcher.component.html',
  styleUrls: ['./login-switcher.component.scss']
})
export class LoginSwitcherComponent {

  public isLoginState: boolean = true;

  @Output()
  state = new EventEmitter<boolean>();

  public switchToSign(data: boolean): void {
    this.isLoginState = data;
    this.state.emit(data);
  }

}
