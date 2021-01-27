import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'chats-sidebar',
  templateUrl: './chats-sidebar.component.html',
  styleUrls: ['./chats-sidebar.component.scss']
})
export class ChatsSidebarComponent implements OnInit {

  @Input() rooms: any[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
