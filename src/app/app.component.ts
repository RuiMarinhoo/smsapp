import { Component } from '@angular/core';
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smsapp';

  constructor(private socket: Socket) {
    // this.socket.emit('message', 'abc');
    this.socket.connect();
    console.log(this.socket);
  }
}
