export interface Profile {
  name: string;
  avatar: string;
  visible:boolean;
  messages: Message []
}

export interface Message {
  date: string;
  message: string;
  status: 'sent' | 'received'
}

// export enum MessageStatus{
//   SENT = 'sent', RECEIVED = 'received'
// }
