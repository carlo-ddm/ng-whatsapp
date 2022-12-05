import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Message, Profile } from 'src/app/interface/profile.interface';

@Component({
  selector: 'app-left-part-central-box',
  templateUrl: './left-part-central-box.component.html',
  styleUrls: ['./left-part-central-box.component.scss']
})
export class LeftPartCentralBoxComponent implements OnInit, OnChanges {

  @Input() data: Profile [] = []

  // Istanzio variabile User
  user =  {
    name: 'Carlo',
    avatar: '_2'
  }

  index:number = 0;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Here', this.data);
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

  changeIndex(index:number){
    console.log(index);

  }
}
