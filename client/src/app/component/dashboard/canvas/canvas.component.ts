import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  ngOnInit(): void {
    // var c = document.getElementById("myCanvas") as HTMLCanvasElement;
    // var width = window.innerWidth
    // var height = window.innerHeight
    // c.style.width = width.toString() + "px";
    // c.style.height = height.toString() + "px"
    // var ctx = c.getContext("2d");
    // var cty = c.getContext("2d");
    // if (ctx && cty) {
    //   ctx.moveTo(0,0);
    //   ctx.lineTo(c.width,c.height);
    //   cty.moveTo(c.width,0);
    //   cty.lineTo(0,c.height); 
    //   ctx.stroke();
    //   cty.stroke();
    // } else {
    //   console.error("Unable to get 2D context for canvas");
    // }

    // listen to mouse events:
    // tracks coordinates of mouse
    // set the initial coordinates before drag starts, to ctx.moveTo()
    // set the final coordinates after drag ends, to ctx.lineTo()

    var c = document.getElementById("myCanvas") as HTMLCanvasElement;
    c.style.width = window.innerWidth.toString() + "px";
    c.style.height = window.innerHeight.toString() + "px";
    var ctx = c.getContext("2d");
    var isDrawing = false;
    if (ctx) {
        c.addEventListener("mousedown", function (event) {
          if(ctx) {
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
            console.log("init x",event.offsetX,"init y", event.offsetY)
          }
        });
    
        c.addEventListener("mousemove", function (event) {
            if (isDrawing && ctx) {
                ctx.lineTo(event.offsetX, event.offsetY);
                ctx.stroke();
            }
        });
    
        c.addEventListener("mouseup", function (event) {
            isDrawing = false;
            var finalX = event.offsetX;
            var finalY = event.offsetY;
            console.log("final x",event.offsetX,"final y", event.offsetY)
        });
    
        c.addEventListener("mouseleave", function () {
            isDrawing = false;
        });
        ctx.stroke();
    } else {
        console.error("Unable to get 2D context for canvas");
    }
    
      }
}
