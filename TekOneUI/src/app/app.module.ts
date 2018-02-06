import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { TrendsdataService } from './trendsdata.service';
import { HttpClientModule } from '@angular/common/http';
import { NgDragDropModule } from 'ng-drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [TrendsdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
