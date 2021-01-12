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
      name: 'Elon Reeve Musk',
      isBot: false,
      active: true,
      avatar: 'https://aif-s3.aif.ru/images/018/249/b7a5d57b005bc19f6eeae875b9ddc5e4.jpg',
      lastMessage: 'Lorem ibp ipsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
    },
    {
      id: 2,
      name: 'Echo',
      isBot: true,
      active: true,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7PxrFc8r3fF9M21nLMOstwmXcTIBoA_tSQ&usqp=CAU',
      lastMessage: 'Lorem dcdcdcdcibp ipsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
    },
    {
      id: 3,
      name: '#your destiny',
      isBot: false,
      active: false,
      avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
      lastMessage: 'Lorem ibp idcdcdcpsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
