// import { getLocaleDateFormat } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Profile } from 'src/app/interface/profile.interface';

@Component({
  selector: 'app-central-box',
  templateUrl: './central-box.component.html',
  styleUrls: ['./central-box.component.scss']
})
export class CentralBoxComponent{

  @Input() data: Profile [] = [];
  selectedProfile!:Profile;

  getData(value:number){
    this.selectedProfile = this.data[value];
  }
}
