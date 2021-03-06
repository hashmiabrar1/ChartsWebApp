import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { SinusoidalChartComponent } from './sinusoidal-chart/sinusoidal-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    SinusoidalChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
