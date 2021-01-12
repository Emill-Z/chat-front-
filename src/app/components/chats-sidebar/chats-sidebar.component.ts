import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chats-sidebar',
  templateUrl: './chats-sidebar.component.html',
  styleUrls: ['./chats-sidebar.component.scss']
})
export class ChatsSidebarComponent implements OnInit {

  public chats: any[] = [
    {
      id: 1,
      name: 'Ilon Mask',
      lastMessage: 'Lorem ibp ipsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
    },
    {
      id: 2,
      name: 'Ilon MaskSDdcS',
      lastMessage: 'Lorem dcdcdcdcibp ipsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
    },
    {
      id: 3,
      name: 'IIDsdi MaskSDS',
      lastMessage: 'Lorem ibp idcdcdcpsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
