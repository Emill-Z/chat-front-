import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routes';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { IrisFieldsModule } from '../../common/modules/fields/fields.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    IrisFieldsModule,
  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    SignInComponent,
  ],
  providers: [ ],
})
export class LoginModule { }

