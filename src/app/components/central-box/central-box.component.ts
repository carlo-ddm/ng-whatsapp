// import { getLocaleDateFormat } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Profile } from 'src/app/interface/profile.interface';

@Component({
  selector: 'app-central-box',
  templateUrl: './central-box.component.html',
  styleUrls: ['./central-box.component.scss']
})
export class CentralBoxComponent implements OnInit, OnChanges {

  @Input() data: Profile [] = [];


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.data);
  }

  getData(value:number){
    console.log('Valore -->',value);
  }
}
