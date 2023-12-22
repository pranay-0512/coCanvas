import { Component, OnInit, ViewChild } from '@angular/core';
import {Canvas} from '../../../_model/canvas'
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  public canvas!: HTMLCanvasElement
  public canvasHeight!: number;
  public canvasWidth!: number;
  public canvasClass: Canvas = new Canvas(this.canvas, this.canvasHeight, this.canvasWidth);
  public ctx!: CanvasRenderingContext2D | null;

  public isDrawing: boolean = false;


  public toggleTool = [
    { name: 'freeDraw', enum: 'FREE_DRAW', color: '#000000', thickness: 2, hasFill: false, opacity: 1, isActive: true },
    { name: 'circle', enum: 'CIRCLE', color: '#000000', thickness: 2, hasFill: false, opacity: 1, isActive: false },
    { name: 'square', enum: 'SQUARE', color: '#000000', thickness: 2, hasFill: false, opacity: 1, isActive: false },
    { name: 'rectangle', enum: 'RECTANGLE', color: '#000000', thickness: 2, hasFill: false, opacity: 1, isActive: false },
    { name: 'diamond', enum: 'DIAMOND', color: '#000000', thickness: 2, hasFill: false, opacity: 1, isActive: false },
    { name: 'uniArrow', enum: 'UNI_ARROW', color: '#000000', thickness: 2, hasFill: false, opacity: 1, isActive: false },
    { name: 'biArrow', enum: 'BI_ARROW', color: '#000000', thickness: 2, hasFill: false, opacity: 1, isActive: false }
  ];
  
  constructor(){
    
  }
  ngOnInit(): void {
      this.setCanvas();
  }

  setCanvas(): void {
    this.canvasClass.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.canvasClass.canvasHeight = window.innerHeight;
    this.canvasClass.canvasWidth = window.innerWidth;

    this.canvasClass.canvas.width = this.canvasClass.canvasWidth;
    this.canvasClass.canvas.height = this.canvasClass.canvasHeight;

    this.ctx = this.canvasClass.canvas.getContext("2d");
  } 

  freeDraw(): void {

  }
  blash(): void {
    // if (this.ctx) {
    //   this.canvasClass.canvas.addEventListener("mousedown", function (e: MouseEvent) {
    //       if(this.ctx) {
    //         this.isDrawing = true;
    //         ctx.beginPath();
    //         ctx.moveTo(offsetX, offsetY);
    //         console.log("init x",e.offsetX,"init y", e.offsetY)
    //       }
    //     });
    
    //     c.addEventListener("mousemove", function (e: MouseEvent) {
    //         if (isDrawing && ctx) {
    //             ctx.lineTo(e.clientX + e.offsetX, e.clientY + e.offsetY);
    //             ctx.stroke();
    //         }
    //     });
    
    //     c.addEventListener("mouseup", function (event) {
    //         isDrawing = false;
    //         var finalX = event.offsetX;
    //         var finalY = event.offsetY;
    //         console.log("final x",event.offsetX,"final y", event.offsetY)
    //     });
    
    //     c.addEventListener("mouseleave", function () {
    //         isDrawing = false;
    //     });
    //     ctx.stroke();
    // } else {
    //     console.error("Unable to get 2D context for canvas");
    // }
    
  }
}
