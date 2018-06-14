declare namespace AMap {
  export interface View2DOptions {
    center: LngLat;
    rotation: number;
    zoom: number;
    crs: string;
  }

  export class View2D {
    constructor(opt: View2DOptions);
  }

  export interface MapOptions {
    view?: View2D;
    layers?: Array<any>;
    zoom?: number;
    zooms?: Array<number>;
    center?: LngLat;
    labelzIndex?: number;
    lang?: string;
    defaultCursor?: string;
    crs?: string;
    animateEnable?: boolean;
    isHotspot?: boolean;
    defaultLayer?: TileLayer;
    rotateEnable?: boolean;
    resizeEnable?: boolean;
    showIndoorMap?: boolean;
    indoorMap?: IndoorMap;
    expandZoomRange?: boolean;
    dragEnable?: boolean;
    zoomEnable?: boolean;
    doubleClickZoom?: boolean;
    keyboardEnable?: boolean;
    jogEnable?: boolean;
    scrollWheel?: boolean;
    touchZoom?: boolean;
    touchZoomCenter?: number;
    mapStyle?: string;
    features?: Array<string>;
    showBuildingBlock?: boolean;
    viewMode?: string;
    pitch?: number;
    maxPitch?: number;
    rotation?: number;
    pitchEnable?: boolean;
    buildingAnimation?: boolean;
    skyColor?: string;
    preloadMode?: boolean;
  }

  namespace event {
    export interface EventListener {
      lnglat: LngLat;
      pixel: Pixel;
      type: string;
      target: Object;
    }
    export function addDomListener(
      instance: any,
      eventName: string,
      handler: Function,
      context?: Object
    ): EventListener;
    export function addListener(
      instance: any,
      eventName: string,
      handler: Function,
      context?: Object
    ): EventListener;
    export function addListenerOnce(
      instance: any,
      eventName: string,
      handler: Function,
      context?: Object
    ): EventListener;
    export function removeListener(listener: EventListener): void;
    export function trigger(
      instance: any,
      eventName: string,
      extArgs: Array<any>
    ): void;
  }

  export class Map extends AMapBase {
    constructor(container: string | HTMLElement, opts: MapOptions);

    poiOnAMAP(obj: Object): void;
    detailOnAMAP(obj: Object): void;
    getZoom(): number;
    getLayers(): Array<any>;
    getCenter(): LngLat;
    getContainer(): HTMLElement;
    getCity(
      callback: (
        result: {
          province: string;
          city: string;
          citycode: string;
          district: number;
        }
      ) => {}
    ): void;
    getBounds(): Bounds;
    getLabelzIndex(): number;
    getLimitBounds(): Bounds;
    getLang(): string;
    getSize(): Size;
    getRotation(): number;
    getStatus(): Object;
    getDefaultCursor(): string;
    getResolution(point: LngLat): number;
    getScale(dpi: number): number;
    setZoom(level: number): void;
    setlabelzIndex(index: number): void;
    setLayers(layers: Array<any>): void;
    add(overlayers: Array<any>): void;
    add(marker: Marker): void;
    remove(overlayers: Array<any>): void;
    getAllOverlays(type: string): Object;
    setCenter(position: LngLat): void;
    setZoomAndCenter(zoomLevel: number, center: LngLat): void;
    setCity(city: string, callback: Function): void;
    setBounds(bound: Bounds): void;
    setLimitBounds(bound: Bounds): void;
    clearLimitBounds(): void;
    setLang(lang: string): void;
    setRotation(rotation: number): void;
    setStatus(status: Object): void;
    setDefaultCursor(cursor: string): void;
    zoomIn(): void;
    zoomOut(): void;
    panTo(positon: LngLat): void;
    panBy(x: number, y: number): void;
    setFitView(overlayList: Array<any>): void;
    clearMap(): void;
    destroy(): void;
    plugin(name: string | Array<string>, callback: Function): void;
    addControl(obj: Object): void;
    removeControl(obj: Object): void;
    clearInfoWindow(): void;
    pixelToLngLat(pixel: Pixel, level: number): LngLat;
    lnglatToPixel(lngLat: LngLat, level: number): Pixel;
    containerToLngLat(pixel: Pixel): LngLat;
    lngLatToContainer(lnglat: LngLat): Pixel;
    setMapStyle(style: string): void;
    getMapStyle(): string;
    setFeatures(feature: Array<string>): void;
    getFeatures(): Array<string>;
    setDefaultLayer(layer: TileLayer): void;
    setPitch(pitch: number): void;
    getPitch(): number;
    getViewMode(): string;
    getObject3DByContainerPos(
      pixel: Pixel,
      layers: Array<any>,
      all: boolean
    ): Array<any>;
    lngLatToGeodeticCoord(lnglat: LngLat): Pixel;
    geodeticCoordToLngLat(pixel: Pixel): LngLat;
  }

  export class Object3DLayer {
    constructor(opts?: Object);

    Objects: Object;
    add(Object3d: Object): void;
    remove(Object3d: Object): void;
    clear(): void;
    reDraw(): void;
  }

  namespace Object3D {
    export class Mesh {
      constructor();

      geometry: MeshGeometry;
      textures: Array<any>;
      needUpdate: boolean;
      transparent: boolean;
      DEPTH_TEST: boolean;
      reDraw(): void;
    }

    export interface MeshGeometry {
      vertices: Array<any>;
      vertexColors: Array<any>;
      vertexUVs: Array<any>;
      faces: Array<any>;
      textureIndices: Array<any>;
    }

    export class MeshLine {
      constructor(opts: {
        path: Array<any>;
        width: number;
        height: number | Array<any>;
        color: string;
      });

      setPath(path: Array<any>): void;
      setWidth(width: number): void;
      setHeight(height: number | Array<any>): void;
      setColor(color: string): void;
    }

    export interface MeshAcceptLights {
      vertexNormals: Array<number>;
    }

    export class Prism extends MeshLine {}
  }

  namespace Lights {
    export class AmbientLight {
      constructor(color: Array<number>, intensity: number);

      setColor(color: Array<number>): void;
      setIntensity(intensity: number): void;
    }

    export class DirectionLight {
      constructor(
        direction: Array<number>,
        color: Array<number>,
        intensity: number
      );

      setDirection(direction: Array<number>): void;
      setColor(color: Array<number>): void;
      setIntensity(intensity: number): void;
    }
  }
}
