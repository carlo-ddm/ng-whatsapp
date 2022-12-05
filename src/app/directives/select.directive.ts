import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  @Input() appSelect:any;

  constructor(private element:ElementRef) {
  }

  @HostListener('click') onClick(){
    this.colorAtSelection('#E5E5E5');
  }


  colorAtSelection(background:string){
    this.element.nativeElement.style.backgroundColor = background
    console.log('INDICE SELEZIONATO?',this.appSelect);
  }

}

