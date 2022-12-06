import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  @Input() appSelect:any;
  index:number = 0;

  constructor(private element:ElementRef) {
  }

  @HostListener('click') onClick(){
    this.colorAtSelection('#E5E5E5');
  }


  colorAtSelection(background:string){
    this.element.nativeElement.style.backgroundColor = background;
  }

}

