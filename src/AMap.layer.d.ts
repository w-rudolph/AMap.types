declare namespace AMap {
  export interface TileLayerOptions {
    map?: Map;
    tileSize?: number;
    tileUrl?: string;
    errorUrl?: string;
    getTileUrl?: string | Function;
    zIndex?: number;
    opacity?: number;
    zooms?: Array<any>;
    detectRetina?: boolean;
  }
  export class TileLayer extends AMapBase {
    constructor(tileOpt: TileLayerOptions);

    setOpacity(alpha: number): void;
    show(): void;
    hide(): void;
    getTiles(): Array<string>;
    reload(): void;
    setTileUrl(url: string): void;
    getZooms(): Array<any>;
    setzIndex(index: number): void;
    setMap(map: Map): void;
  }

  namespace TileLayer {
    export class Satellite extends TileLayer {}

    export class RoadNet extends TileLayer {}

    export class Traffic extends TileLayer {}
  }

  export interface MassMarksOptions {
    zIndex?: number;
    opacity?: number;
    zooms?: Array<any>;
    cursor?: string;
    alwaysRender?: boolean;
    style?: StyleObjectOptions | Array<StyleObjectOptions>;
  }
  export class MassMarks extends AMapBase {
    constructor(data: Array<any>, opts: MassMarksOptions);
  }
}
