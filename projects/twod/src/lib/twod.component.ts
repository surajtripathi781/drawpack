import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Paper } from './model/Paper.class';

@Component({
  selector: 'raph-paper',
  template: `
    <div #view2d id="svg_paper"></div>
  `,
  styles: []
})
export class TWODComponent implements OnInit ,AfterViewInit{
 @ViewChild('view2d', { static: true })
 canvasRef: ElementRef;

  constructor() {

  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    let paper=new Paper(this.canvasRef);
  }




}
