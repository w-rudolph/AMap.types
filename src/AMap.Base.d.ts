declare namespace AMap {
  export class PixelCls {
    constructor(x: number, y: number);

    getX(): number;
    getY(): number;
    equals(point: PixelCls): boolean;
    toString(): string;
  }

  export type Pixel = PixelCls | [number, number];

  export class SizeCls {
    constructor(width: number, height: number);

    getWidth(): number;
    getHeight(): number;
    toString(): string;
  }
  export type Size = SizeCls | [number, number];

  export class LngLatCls {
    constructor(lng: number, lat: number);

    offset(w: number, s: number): LngLat;
    distance(lnglat: LngLat | Array<LngLat>): number;
    getLng(): number;
    getLng(): number;
    equals(lnglat: LngLat): boolean;
    toString(): string;
  }
  export type LngLat = LngLatCls | [number, number];

  export class BoundsCls {
    constructor(southWest: LngLat, northEast: LngLat);

    contains(point: LngLat): boolean;
    getCenter(): LngLat;
    getSouthWest(): LngLat;
    getNorthEast(): LngLat;
    toString(): string;
  }
  export type Bounds = BoundsCls | [LngLat, LngLat];
  
  export class AMapBase {
    on(eventName: string, handler: Function, context?: Object): void;
    off(eventName: string, handler: Function, context?: Object): void;
  }

  export interface StyleObjectOptions {
    anchor: Pixel;
    url: string;
    size: Size;
    rotation?: number;
  }
}
