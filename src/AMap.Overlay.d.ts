declare namespace AMap {
  export type AnimationType =
    | "AMAP_ANIMATION_NONE"
    | "AMAP_ANIMATION_DROP"
    | "AMAP_ANIMATION_BOUNCE";

  export interface MakerLabel {
    content: string | HTMLElement;
    offset: Pixel;
  }

  export interface MarkerOPtions {
    map?: Map;
    icon?: string | Icon;
    offset?: Pixel;
    title?: string;
    position?: LngLat;
    content?: string | HTMLElement;
    topWhenClick?: boolean;
    bubble?: boolean;
    draggable?: boolean;
    raiseOnDrag?: boolean;
    cursor?: string;
    visible?: boolean;
    zIndex?: number;
    angle?: number;
    autoRotation?: boolean;
    animation?: AnimationType;
    shadow?: Icon;
    clickable?: boolean;
    shape?: MarkerShape;
    extData?: any;
    label?: MakerLabel;
  }
  export class Marker extends AMapBase {
    constructor(opts: Object);

    setMap(map: Map): void;
    getMap(): Map;
    setContent(html: string | HTMLElement): void;
    setPosition(lnglat: LngLat): void;
    markOnAMAP(opts: { name: string; position?: LngLat }): void;
    getOffset(): Pixel;
    setOffset(offset: Pixel): void;
    setAnimation(animation: AnimationType): void;
    getAnimation(): AnimationType;
    setClickable(clickable: boolean): void;
    getClickable(): boolean;
    getPosition(): LngLat;
    setPosition(lnglat: LngLat): void;
    setAngle(angle: number): void;
    getAngle(): number;
    setLabel(label: MakerLabel): void;
    getLabel(): MakerLabel;
    setzIndex(index: number): void;
    getzIndex(): number;
    setIcon(icon: string | Icon): void;
    getIcon(): string | Icon;
    setDraggable(dragable: boolean): void;
    getDraggable(): boolean;
    hide(): void;
    show(): void;
    setCursor(cursor: string): void;
    setContent(content: string | HTMLElement): void;
    getContent(): string;
    setTitle(title: string): void;
    getTitle(): string;
    setTop(isStop: boolean): void;
    getTop(): boolean;
    setShadow(icon: Icon): void;
    getShadow(): Icon;
    setShape(shap: MarkerShape): void;
    getShape(): MarkerShape;
    setExtData(ext: any): void;
    getExtData(): any;
    moveAlong(
      path: Array<any>,
      speed: number,
      callback: Function,
      circlable: boolean
    ): void;
    moveTo(lngtlat: LngLat, speed: number, callback: Function): void;
    stopMove(): void;
    pauseMove(): void;
    resumeMove(): void;
  }

  export interface IconOptions{
    size?: Size;
    imageOffset?: Pixel;
    image?: string;
    imageSize?: Size;
  }
  export class Icon {
    constructor(opts: IconOptions);
    getImageSize(): Size;
    setImageSize(size: Size): void;
  }

  export interface MarkerShapeOptions {
    coords: Array<number>;
    type: string;
  }
  export class MarkerShape {
    constructor(opt: MarkerShapeOptions);
    setMap(map: Map): void;
    getMap(): Map;
    setStyle(style: StyleObjectOptions | Array<StyleObjectOptions>): void;
    getStyle(): StyleObjectOptions | Array<StyleObjectOptions>;
    setData(data: Object): void;
    getData(): Object;
    show(): void;
    hide(): void;
    clear(): void;
  }
}
