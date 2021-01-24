import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chats-sidebar',
  templateUrl: './chats-sidebar.component.html',
  styleUrls: ['./chats-sidebar.component.scss']
})
export class ChatsSidebarComponent implements OnInit {

  @Input() rooms: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
