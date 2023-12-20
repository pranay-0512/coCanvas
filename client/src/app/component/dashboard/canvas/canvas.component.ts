import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  ngOnInit(): void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement;
    var ctx = c.getContext("2d");
    if (ctx) {
      ctx.moveTo(500,0);
      ctx.lineTo(0,500);
      ctx.stroke();
    } else {
      console.error("Unable to get 2D context for canvas");
    }
  }
}
