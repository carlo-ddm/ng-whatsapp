import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Message, Profile } from 'src/app/interface/profile.interface';

@Component({
  selector: 'app-right-part-central-box',
  templateUrl: './right-part-central-box.component.html',
  styleUrls: ['./right-part-central-box.component.scss']
})
export class RightPartCentralBoxComponent implements OnChanges{
  @Input() data:Profile | null | undefined;




  ngOnChanges(changes: SimpleChanges): void {

    // console.log('DATA: ', this.data);

    // console.log('INTERLOCUTOR: ', this.interlocutor);
  }

  getHours(messages: Message[]): string{
    let messageReceived = messages.filter(messaggio=>messaggio.status === 'received')
    // console.log(messageReceived);

    if (messageReceived.length > 0) {
      return messageReceived[messageReceived.length - 1]?.date.slice(10)
    } else {
      return ''
    }
  }

}
