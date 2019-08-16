import { Component, OnInit, Input } from '@angular/core';
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

  protected subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.options = {
      disablePushOnDrag: true,
      draggable: { enabled: true },
      gridType: GridType.Fit,
      resizable: { enabled: true }
    };
    this.items = [
      {
        id: '1',
        name: 'Timeline',
        component: 'timeline',
        cols: 8,
        rows: 6,
        y: 0,
        x: 0
      },
      {
        id: '2',
        name: 'Timeline',
        component: 'timeline',
        cols: 20,
        rows: 10,
        y: 2,
        x: 2
      }
    ];
  }

}
