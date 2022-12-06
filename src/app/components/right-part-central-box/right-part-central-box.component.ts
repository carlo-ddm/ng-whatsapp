import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Profile } from 'src/app/interface/profile.interface';

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

}
