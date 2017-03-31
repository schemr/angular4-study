import { HostListener, Directive, Renderer2, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostListener('mouseenter') onmouseover(evnetData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue")
  }
  @HostListener('mouseleave') onmouseleave(evnetData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent")
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", 'blue')
  }
}
