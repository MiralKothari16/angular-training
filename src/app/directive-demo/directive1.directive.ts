import { Directive, ElementRef, Host, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive implements OnInit {

  @Input() defaultcolor !: string;
  @Input() Highlightcolor!: string;

  @HostBinding('style.backgroundColor') color!: string;
  @HostBinding('style.color') textcolor!: string;

  constructor(private element: ElementRef, private renderor: Renderer2) { }

  ngOnInit(): void {
    //using elementRef
    //(this.element.nativeElement as HTMLElement).style.backgroundColor = 'Red';

    //usign render
    this.renderor.setStyle(this.element.nativeElement, 'backgroundColor', 'Pink');
  }

  @HostListener('mouseenter') onMouseOver(event: Event) {
    //this.renderor.setStyle(this.element.nativeElement, 'backgroundColor', 'Blue');
    this.color = this.Highlightcolor; //'Blue'  ; 
    this.textcolor = "brown";
  }
  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.color = this.defaultcolor;//'Yellow';
    //this.renderor.setStyle(this.element.nativeElement, 'backgroundColor', 'Yellow');
  }
  @HostListener('click') onclick(event: Event) {
    this.color = 'cyan';
    this.textcolor = 'black';
    // this.renderor.setStyle(this.element.nativeElement, 'backgroundColor', 'cyan  ');
  }
  // private highlight(color: string){
  //   this.el.nativeElement.style.back
}


