import { Component } from '@angular/core';
import { TrendingComponent } from './trending/trending.component';
import { NgDragDropModule} from 'ng-drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
