import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const CREATE_USER = gql`
  mutation CreateUser($id: ID!, $name: String!, $email: String!){
    signUp(input: { id: $id, name: $name, email: $email } ) {
      id,
      name,
      email,
    }
  }
`;

const GET_USER = gql(`
  {
    # me(id: "1") {
    me {
      id,
      name
    }
  }
`);

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public isLoginState: boolean = true;

  constructor(
    private apolloProvider: Apollo
  ) { }

  public onSwitchToSignUp(data): void {
    this.isLoginState = data;
  }

  onClick() {
    this.apolloProvider.mutate({
      mutation: CREATE_USER,
      variables: {
        id: 1,
        name: 'UserName',
        email: 'email@gmail.com',
      }
    })
    .subscribe((data) => { });
  }

  onClickGet() {
    this.apolloProvider
      .watchQuery({ query: GET_USER })
      .valueChanges
      .subscribe((data) => {
        console.log(data);
      });
  }

  onInput(event) {
    const login = event.target.value;
  }

}
