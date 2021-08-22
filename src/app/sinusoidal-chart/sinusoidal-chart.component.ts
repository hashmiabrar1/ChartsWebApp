import { Component, OnInit, Input } from '@angular/core';
import {Chart, Point} from "chart.js";
@Component({
  selector: 'app-sinusoidal-chart',
  template: `
    <p>
      <div id="chartSine">
      <canvas id="myChart" width="180px" height="80px"></canvas>
      <div>
  `,
  styles: [
  ]
})
export class SinusoidalChartComponent implements OnInit {

  @Input()datav: any;
  private chart2: Chart;
  // public data2: Point[]= [{x: 0, y: 0}, {x: 0.01, y: 50}, {x: 0.02, y: 0}];
  constructor() {

   }

  ngOnInit(): void {


}

  ngOnChanges(datav){

    // console.log('Here it is: ');
    // console.log(this.datav);
    let per=this.datav.period;
    let amp=this.datav.amplitude;
    // console.log(y,z);


    var xValues = [];
    var yValues = [];
    generateData(0, Number(per), 30, Number(amp));

    document.getElementById("chartSine").innerHTML = '&nbsp;';
    document.getElementById("chartSine").innerHTML = '<canvas id="myChart"></canvas>';

    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          pointRadius: 1.5,
          borderColor: "rgba(0,0,255,0.5)",
          data: yValues
        }]
      },    
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Sinusoidal Graph",
          fontSize: 15
        }
      }
    });
    function generateData(i1, per, step = 1, amp) {
      for (let x = i1; x <= per*360; x += step) {
        yValues.push(amp*Math.sin(x*Math.PI/180));
        xValues.push(x);
        // console.log(x);
        // console.log(eval(value));
      }
    }
      
  }

ngAfterViewInit(){


}

// y= amp*sin(x)+period

}
