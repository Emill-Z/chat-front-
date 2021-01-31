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
    private _dataAdapter: DataAdapter,
  ) {
    this._dataAdapter.queryRooms().subscribe(({ data }) => {
      this.availableRooms = data.rooms;
    });
  }

  public onSelectNewRoom(id: number): void {
    this._dataAdapter.joinRoom(id);
  }

  public onSelectRoom(id: number): void {
    console.log('onSelectRoom: ', id);
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
