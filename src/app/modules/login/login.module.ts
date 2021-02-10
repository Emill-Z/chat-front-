import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routes';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { IrisFieldsModule } from '../../common/modules/fields/fields.module';
import { LoginSwitcherComponent } from './components/login-switcher/login-switcher.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    IrisFieldsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    SignInComponent,
    LoginSwitcherComponent,
  ],
  providers: [ ],
})
export class LoginModule { }

