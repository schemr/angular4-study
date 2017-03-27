import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element: {type: string, name:string, content:string};
  @Input() name: string;

  constructor() {
    console.log('constructor called!')
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called!')
  }

  ngDoCheck(){
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!!')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!!')
  }

  ngOnDestroy() {
    console.log('ngOndestory called!')
  }
}
