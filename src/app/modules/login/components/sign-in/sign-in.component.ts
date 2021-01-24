import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  @Output()
  switchToSignUp = new EventEmitter<boolean>();

  public onSwitchToSignUp(): void {
    this.switchToSignUp.emit(false);
  }

}
