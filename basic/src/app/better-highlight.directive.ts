import { HostListener, HostBinding, Directive, Renderer2, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", 'blue')
  }

  @HostListener('mouseenter') onmouseover(evnetData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue")
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onmouseleave(evnetData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent")
    this.backgroundColor = this.defaultColor;
  }
}
