import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Message, Profile } from 'src/app/interface/profile.interface';

@Component({
  selector: 'app-left-part-central-box',
  templateUrl: './left-part-central-box.component.html',
  styleUrls: ['./left-part-central-box.component.scss']
})
export class LeftPartCentralBoxComponent{

  @Input() data: Profile [] = []

  @Output() emitSelectedProfile = new EventEmitter<number>()

  // Istanzio variabile User
  user =  {
    name: 'Carlo',
    avatar: '_2'
  }

  selectedIndex = 0;

  serachProfiles:string = ''

  getHours(messages: Message[]): string{
    let messageReceived = messages.filter(messaggio=>messaggio.status === 'received')
    // console.log(messageReceived);

    if (messageReceived.length > 0) {
      return messageReceived[messageReceived.length - 1]?.date.slice(10)
    } else {
      return ''
    }
  }

  search(){
    this.data.forEach(profile => {
      if (profile.name.toLowerCase().includes(this.serachProfiles.toLowerCase()))
      {
          profile.visible = true;
      } else {
          profile.visible = false;
      }
  });
  }

  emitProfile(index:number){
    this.emitSelectedProfile.emit(index)
  }

  select(index:number){
    this.selectedIndex = index
    console.log(this.selectedIndex);

  }

}
