import { Component, OnInit, Input, ViewChild, ContentChild, ElementRef, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element: {type: string, name:string, content:string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!')
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called!')
    console.log("Text Content : "+this.header.nativeElement.textContent)
    console.log("Text Conntent of Paragraph : "+this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
    console.log("Text Conntent of Paragraph : "+this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!!')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!')
    console.log('Text Content : '+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!!')
  }

  ngOnDestroy() {
    console.log('ngOndestory called!')
  }
}
