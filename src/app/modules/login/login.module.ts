import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [ ],
})
export class LoginModule { }

