import { Component, Input, OnInit } from '@angular/core';
import { DataAdapter } from '../../../../data-adapter/data-adapter.service';

@Component({
  selector: 'chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  @Input() chat = null;

  constructor(
    private dataAdapter: DataAdapter,
  ) { }

  ngOnInit(): void {
  }

  public onClick(roomId: number): void {
    this.dataAdapter.selectRoom(roomId);
  }

}
