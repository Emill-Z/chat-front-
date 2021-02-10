import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { RespDataI } from 'src/app/common/models/graphql.interface';
import { MeI, SignInI } from 'src/app/common/models/user.interface';
import { AuthService } from 'src/app/common/services/auth.service';
import { SIGN_IN } from '../../../../common/qraphql/user/user.mutation';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public formGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private readonly apolloProvider: Apollo,
    private readonly auth: AuthService,
    private readonly router: Router,
  ) { }

  onSubmit() {
    // test@gmail.com
    // qwerty
    this.apolloProvider.mutate({
      mutation: SIGN_IN,
      variables: {
        email: this.formGroup.controls.email.value,
        password: this.formGroup.controls.password.value,
      }
    })
    .subscribe((resp: RespDataI<SignInI>) => {
      if (resp?.data.signIn?.id) {
        const user: MeI = resp.data.signIn;
        this.auth.login(user);
        this.router.navigate(['chat']);
      }
    });
  }

}
