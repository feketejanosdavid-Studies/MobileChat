import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  messageRef: AngularFireList<any>

  constructor(private db:AngularFireDatabase) { 
    this.messageRef=db.list("messages");
  }

  getmessages() {
    return this.messageRef;
  }

  addmessage(uzi:any) {
    this.messageRef.push({username:"Nagy János", message:uzi});
  }
}
