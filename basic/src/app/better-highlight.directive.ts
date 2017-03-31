import { HostListener, HostBinding, Directive, Renderer2, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent";
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", 'blue')
  }

  @HostListener('mouseenter') onmouseover(evnetData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue")
    this.backgroundColor = 'blue'
  }
  @HostListener('mouseleave') onmouseleave(evnetData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent")
    this.backgroundColor = 'transparent'
  }
}
