import { Component, OnInit, Input } from '@angular/core';
import { DashboardWidget, DisplayGrid, GridType} from '../../models/models';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less']
})
export class WidgetComponent implements OnInit {
  @Input() widget: DashboardWidget;
  constructor() { }

  ngOnInit() {
  }

}
