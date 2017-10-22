import {Component,OnDestroy,OnInit} from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-first-chat',
  templateUrl: './first-chat.component.html',
  styleUrls: ['./first-chat.component.css']
})
export class FirstChatComponent implements OnInit,OnDestroy {

  messages = [];
  connection;
  message;
  constructor(private chatService: ChatService) { }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
