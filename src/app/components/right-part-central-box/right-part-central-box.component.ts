import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Data } from '@angular/router';
import { timer } from 'rxjs';
import { Message, Profile } from 'src/app/interface/profile.interface';

@Component({
  selector: 'app-right-part-central-box',
  templateUrl: './right-part-central-box.component.html',
  styleUrls: ['./right-part-central-box.component.scss']
})
export class RightPartCentralBoxComponent implements OnInit, OnChanges{

  @Input() data:Profile | null | undefined;

  newMessage:string = '';

  newMesssageDate = this.getNewMessageDate();

  lastAccess = this.getNewMessageDate()

  getNewMessageDate():string{
    const data = new Date();
    const gg = data.getDate();
    const mm = data.getMonth();
    const yy = data.getFullYear();

    const hh = data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds()

    if (sec >= 0 && sec <= 9) {
      return gg + '/' + mm + '/' + yy + ' ' + hh + ':' + min + ':' + '0' +  sec
    } else {
      return gg + '/' + mm + '/' + yy + ' ' + hh + ':' + min + ':' +  sec
    }
  }

  ngOnInit(): void {
    // console.log('data: ',this.data?.messages);

    setInterval(()=>{
      this.timer(this.getNewMessageDate())
    }, 1000)
  }

   timer(lastAccess:string) {
    console.log(lastAccess);

    setTimeout(()=> {
      lastAccess
    }, 1000)

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.newMessage);
  }

  // Orario dell'ultimo messaggio dell'interlocutore
  getHours(messages: Message[]): string{
    let messageReceived = messages.filter(messaggio=>messaggio.status === 'sent')
    // console.log(messageReceived);

    if (messageReceived.length > 0) {
      return messageReceived[messageReceived.length - 1]?.date.slice(10)
    } else {
      return ''
    }
  }

  newMessageCreator(){
    if (this.newMessage.length > 1) {
      this.data?.messages.push(
        {
          date: this.newMesssageDate,
          message: this.newMessage,
          status: 'sent'
        }
      )
      this.newMessage = '';
      setTimeout(() => {
        this.data?.messages.push(
            {
                date: this.newMesssageDate,
                message: 'Messaggio ricevuto!',
                status: 'received'
            }
        )
    }, 3000)
    }
  }







}
