import { Injectable } from '@angular/core';

export interface Color {
  r: number;
  g: number;
  b: number;
}

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  public readonly green = { r: 51, g: 204, b: 51 };

  public readonly yelllow = { r: 255, g: 255, b: 0 };
  public readonly orange = { r: 255, g: 165, b: 0 };
  public readonly red = { r: 255, g: 77, b: 77 };

  constructor() { }

  colorgradient(count: number, color1: { r: number; g: number; b: number; }, color2: { r: number; g: number; b: number; }): string {
    const rdist = color1.r - color2.r;
    const gdist = color1.g - color2.g;
    const bdist = color1.b - color2.b;
    const rperc: number = rdist > 0 ? count / 10 : (10 - count) / 10;
    const gperc: number = gdist > 0 ? count / 10 : (10 - count) / 10;
    const bperc: number = bdist > 0 ? count / 10 : (10 - count) / 10;

    const r = Math.round(Math.abs(rdist) * rperc + color1.r);
    const g = Math.round(Math.abs(gdist) * gperc + color1.g);
    const b = Math.round(Math.abs(bdist) * bperc + color1.b);

    const newColor = this.hexrgb(r, g, b);

    return newColor;
  }

  hexrgb(red: number, green: number, blue: number): string {
    const decColor = 0x1000000 + 0x10000 * red + 0x100 * green + blue;
    return '#' + decColor.toString(16).substr(1);
  }

  hexcolor(color: Color): string {
    return this.hexrgb(color.r, color.g, color.b);
  }
}
