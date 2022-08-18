import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight:any;

  constructor(private el:ElementRef) { }

  highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.highlight("cyan");
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.highlight("white");
  }

}
