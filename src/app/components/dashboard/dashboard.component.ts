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

  protected subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.options = {
      disablePushOnDrag: true,
      draggable: { enabled: true },
      gridType: GridType.Fit,
      resizable: { enabled: true },
      displayGrid: DisplayGrid.None,
      itemResizeCallback: (item) => {
        // update DB with new size
        // send the update to widgets
        this.resizeEvent.emit(item);
        // console.log(item);
      },
      itemChangeCallback: (item) => {
        // 更新widget, 重新赋值操作
        console.log(item);
      }
    };
    this.items = [
      {
        id: '1',
        name: 'Timeline',
        component: 'timeline',
        cols: 2,
        rows: 2,
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
