import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Profile } from 'src/app/interface/profile.interface';

@Component({
  selector: 'app-left-part-central-box',
  templateUrl: './left-part-central-box.component.html',
  styleUrls: ['./left-part-central-box.component.scss']
})
export class LeftPartCentralBoxComponent implements OnInit, OnChanges {

  @Input() data: Profile [] = []

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
  }

}
