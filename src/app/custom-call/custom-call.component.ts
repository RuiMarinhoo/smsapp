import { Component, OnInit } from '@angular/core';
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-custom-call',
  templateUrl: './custom-call.component.html',
  styleUrls: ['./custom-call.component.css']
})
export class CustomCallComponent implements OnInit {

  constructor(private socket: Socket) {
    this.socket.connect();
    this.click();
    console.log(this.socket);
  }

  click(){
    this.socket.emit('teste', {
      n: '963066074',
      name: 'Ze',
      message: 'abc'
    });
  }

  ngOnInit(): void {
  }

}
