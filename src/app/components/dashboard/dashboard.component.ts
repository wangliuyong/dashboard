import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardConfig, DashboardWidget, DisplayGrid, GridType} from '../../models/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  public options: DashboardConfig;
  public items: DashboardWidget[];
  resizeEvent: EventEmitter<any> = new EventEmitter<any>();
  i = 0;

  protected subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.options = {
      /* 所有配置
      gridType?: gridTypes;
      fixedColWidth?: number;
      fixedRowHeight?: number;
      keepFixedHeightInMobile?: boolean;
      keepFixedWidthInMobile?: boolean;
      setGridSize?: boolean;
      compactType?: compactTypes;
      mobileBreakpoint?: number;
      minCols?: number;
      maxCols?: number;
      minRows?: number;
      maxRows?: number;
      defaultItemCols?: number;
      defaultItemRows?: number;
      maxItemCols?: number;
      maxItemRows?: number;
      minItemCols?: number;
      minItemRows?: number;
      minItemArea?: number;
      maxItemArea?: number;
      margin?: number;
      outerMargin?: boolean;
      outerMarginTop?: number | null;
      outerMarginRight?: number | null;
      outerMarginBottom?: number | null;
      outerMarginLeft?: number | null;
      useTransformPositioning?: boolean;
      scrollSensitivity?: number | null;
      scrollSpeed?: number;
      initCallback?: (gridster: GridsterComponentInterface) => void;
      destroyCallback?: (gridster: GridsterComponentInterface) => void;
      gridSizeChangedCallback?: (gridster: GridsterComponentInterface) => void;
      itemChangeCallback?: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => void;
      itemResizeCallback?: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => void;
      itemInitCallback?: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => void;
      itemRemovedCallback?: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => void;
      itemValidateCallback?: (item: GridsterItem) => boolean;
      draggable?: Draggable;
      resizable?: Resizable;
      swap?: boolean;
      pushItems?: boolean;
      disablePushOnDrag?: boolean;
      disablePushOnResize?: boolean;
      disableAutoPositionOnConflict?: boolean;
      pushDirections?: PushDirections;
      pushResizeItems?: boolean;
      displayGrid?: displayGrids;
      disableWindowResize?: boolean;
      disableWarnings?: boolean;
      scrollToNewItems?: boolean;
      disableScrollHorizontal?: boolean;
      disableScrollVertical?: boolean;
      enableEmptyCellClick?: boolean;
      enableEmptyCellContextMenu?: boolean;
      enableEmptyCellDrop?: boolean;
      enableEmptyCellDrag?: boolean;
      emptyCellClickCallback?: (event: MouseEvent, item: GridsterItem) => void;
      emptyCellContextMenuCallback?: (event: MouseEvent, item: GridsterItem) => void;
      emptyCellDropCallback?: (event: MouseEvent, item: GridsterItem) => void;
      emptyCellDragCallback?: (event: MouseEvent, item: GridsterItem) => void;
      emptyCellDragMaxCols?: number;
      emptyCellDragMaxRows?: number;
      ignoreMarginInRow?: boolean;
      api?: {
        resize?: () => void,
        optionsChanged?: () => void,
        getNextPossiblePosition?: (newItem: GridsterItem) => boolean,
        getFirstPossiblePosition?: (item: GridsterItem) => GridsterItem,
        getLastPossiblePosition?: (item: GridsterItem) => GridsterItem,
      };
      [propName: string]: any;
      */
      disablePushOnDrag: true,
      draggable: { enabled: true },
      gridType: GridType.Fixed, // 可以固定定元素高度宽度，像素为单位
      resizable: { enabled: true },
      displayGrid: DisplayGrid.Always,
      setGridSize: true,
      keepFixedHeightInMobile: true,
      // fixedColWidth: 250, // 列宽
      fixedRowHeight: 50, // 行高
      margin: 24,
      maxCols: 6,
      minCols: 6,
      maxRows: 100, // 行
      minRows: 20, // 行
      itemResizeCallback: (item) => {
        // update DB with new size
        // send the update to widgets
        this.resizeEvent.emit(item);
        // console.log(item);
      },
      itemChangeCallback: (item) => {
        // 更新widget, 重新赋值操作
        console.log(item);
        console.log(this.i++);
      }
    };
    this.items = [
      {
        id: '1',
        name: 'Timeline',
        component: 'timeline',
        cols: 2,
        rows: 3,
        y: 2,
        x: 2
      },
      {
        id: '2',
        name: 'Timeline',
        component: 'timeline',
        cols: 1,
        rows: 2,
        y: 4,
        x: 4
      },
      {
        id: '3',
        name: 'Timeline',
        component: 'timeline',
        cols: 3,
        rows: 2,
        y: 4,
        x: 4
      }
    ];
  }

}
