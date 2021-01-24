import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class WebsocketService {

  get socket(): Socket {
    return this._socket;
  }

  private _socket: Socket = null;

  constructor() { }

  public connect(): void {
    this._socket = io('http://localhost:3000');
  }

}