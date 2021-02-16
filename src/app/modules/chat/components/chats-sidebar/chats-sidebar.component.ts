import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { DataAdapter } from '../../data-adapter/data-adapter.service';

@Component({
  selector: 'chats-sidebar',
  templateUrl: './chats-sidebar.component.html',
  styleUrls: ['./chats-sidebar.component.scss']
})
export class ChatsSidebarComponent {

  @Input() rooms: any[] = [];

  public availableRooms = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly dataAdapter: DataAdapter,
  ) {
    this.dataAdapter.queryUsers().subscribe(({ data }) => {
      this.availableRooms = data?.users ?? null;
    });
  }

  public onSelectNewRoom(user): void {
    // this.dataAdapter.joinRoom(user.id);
    console.log('onSelectNewRoom: ', user);
    this.dataAdapter.selectUser(user);
  }

  public onSelectRoom(id: number): void {
    console.log('onSelectRoom: ', id);
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
