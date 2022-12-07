import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Message, Profile } from 'src/app/interface/profile.interface';

@Component({
  selector: 'app-right-part-central-box',
  templateUrl: './right-part-central-box.component.html',
  styleUrls: ['./right-part-central-box.component.scss']
})
export class RightPartCentralBoxComponent implements OnInit{

  ngOnInit(): void {
    console.log('data: ',this.data?.messages);

  }

  @Input() data:Profile | null | undefined;


  // ORARIO DI ULTIMO ACCESSO DELL'INTERLOCUTORE *************************
  getHours(messages: Message[]): string{
    let messageReceived = messages.filter(messaggio=>messaggio.status === 'sent')
    // console.log(messageReceived);

    if (messageReceived.length > 0) {
      return messageReceived[messageReceived.length - 1]?.date.slice(10)
    } else {
      return ''
    }
  }

}
