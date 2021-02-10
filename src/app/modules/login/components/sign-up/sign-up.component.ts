import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { RespDataI } from 'src/app/common/models/graphql.interface';
import { MeI, SignUpI } from 'src/app/common/models/user.interface';
import { AuthService } from 'src/app/common/services/auth.service';
import { SIGN_UP } from '../../../../common/qraphql/user/user.mutation';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public formGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(
    private readonly apolloProvider: Apollo,
    private readonly auth: AuthService,
    private readonly router: Router,
  ) { }

  onSubmit() {
    if (this.formGroup.controls.password.value !== this.formGroup.controls.confirmPassword.value) { return; }

    this.apolloProvider.mutate({
      mutation: SIGN_UP,
      variables: {
        name: this.formGroup.controls.name.value,
        email: this.formGroup.controls.email.value,
        password: this.formGroup.controls.password.value,
      }
    })
    .subscribe((resp: RespDataI<SignUpI>) => {
      if (resp?.data.signUp?.id) {
        const user: MeI = resp.data.signUp;
        this.auth.login(user);
        this.router.navigate(['chat']);
      }
    });
  }

}
