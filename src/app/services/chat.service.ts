import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private url = 'http://localhost:3000';
  private socket;

  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      console.log(this.socket);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

}
