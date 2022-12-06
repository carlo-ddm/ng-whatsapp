import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Message, Profile } from 'src/app/interface/profile.interface';

@Component({
  selector: 'app-left-part-central-box',
  templateUrl: './left-part-central-box.component.html',
  styleUrls: ['./left-part-central-box.component.scss']
})
export class LeftPartCentralBoxComponent implements OnInit, OnChanges {

  @Input() data: Profile [] = []

  @Output() emitSelectedProfile = new EventEmitter<number>()

  // Istanzio variabile User
  user =  {
    name: 'Carlo',
    avatar: '_2'
  }

  serachProfiles:string = ''

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

  // changeIndex(index:number){
  //   // Funziona anche solo con c-log
  //   this.index = index
  // }

  search(){
    this.data.forEach(profile => {
      if (profile.name.toLowerCase().includes(this.serachProfiles.toLowerCase()))
      {
          profile.visible = true;
      } else {
          profile.visible = false;
      }
  });
  console.log(this.search);
  }

  emitProfile(index:number){
    this.emitSelectedProfile.emit(index)
    console.log(index);
  }

}
