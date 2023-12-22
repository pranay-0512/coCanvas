import { Tools } from "../_enum/tools";
export class Canvas {
    canvas: HTMLCanvasElement;
    canvasHeight!: number;
    canvasWidth!: number;
    constructor(canvas: HTMLCanvasElement, canvasHeight: number, canvasWidth: number){
        this.canvas = canvas;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth
    }
}
export class Tool {
    name!: string;
    enum!: Tools;
    color!: string;
    thickness!: number;
    hasFill!: boolean;
    opacity!: number;
    isActive!: boolean;
}
