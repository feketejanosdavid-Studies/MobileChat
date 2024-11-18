import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  implements OnInit, OnDestroy {
  messages:any;
  feliratkozas!:Subscription;

  constructor(private base:BaseService) { }

  ngOnInit() {
    this.feliratkozas = this.base.getmessages().valueChanges().subscribe(
      (res)=>this.messages=res
    )
  }

  ngOnDestroy(): void {
      if (this.feliratkozas) this.feliratkozas.unsubscribe();
  }

  AddMessage(event:any) {
    this.base.addmessage(event);
  }
}
