import {AfterViewInit, Component, ElementRef, ViewChild, Input} from '@angular/core';
import {Chart, Point} from "chart.js";

@Component({
  selector: 'app-line-chart',
  template: `
      <canvas #chart></canvas>`,
  styles: [`
      :host {
          display: inline-block;
          position: relative;
          height:100%;
          height: 500px;
          width: 500px;
      },
  `]
})


export class LineChartComponent implements AfterViewInit {

  @Input()datap: any;

  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;
  private chart2: Chart;
  public data: Point[] = [{x: 0, y: 0}, {x: 0.01, y: 50}, {x: 0.02, y: 0}];

  // public temp: Point[] = [{x: , y: 0}, {x: 0.01, y: 50}, {x: 0.02, y: 0}];

  constructor() { 
  }

  ngOnChanges(datap){
      let m=datap.datap.currentValue.first;
      let n=datap.datap.currentValue.last;
      let p=datap.datap.currentValue.max;
      let temp=this.data;

      temp[0].x=Number(m);
      temp[1].y=Number(p);
      temp[2].x=Number(n);

      temp[1].x=(Number(m)+Number(n))/2

      console.log(temp);
      this.data=temp;


    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Data Analysis',
          data: this.data,
          fill: false,
          borderColor: "rgba(0,0,255,0.5)"
        }]
      },
      options: {
        elements: {
        line: {
            tension: 0
        }
    },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            type: 'linear',
            ticks: {

            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {

            }
          }],
        },
      }
    });
  }

  ngAfterViewInit() {

    console.log(this.datap);
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Data Analysis',
          data: this.data,
          fill: false,
          borderColor: "rgba(0,0,255,0.5)",
        }]
      },
      options: {
        elements: {
        line: {
            tension: 0
        }
    },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            type: 'linear',
          }],
        }
      }
    });


// var c = <HTMLCanvasElement> document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(50,50);
// ctx.bezierCurveTo(120,-100,200,250,250,50);
// ctx.bezierCurveTo(300,-100,350,250,430,50);
// ctx.lineWidth = 5;
// ctx.strokeStyle = '#003300';
// ctx.stroke();

// var chart = new Chart("chartContainer", {
//   title:{
//     text: "Render Chart for Sin Function"
//   },
//   axisX:{
//     title: "Angle (in Degree) →",
//     interval: 90    
//   },
//   axisY: {
//     title: "sin(x) →"
//   },
//   data: [
//     {
//       type: "rangeArea",
//       dataPoints: []
//     }         
//   ]
// });

 

  }
}
