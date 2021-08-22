import {Component, OnInit} from '@angular/core';
import {Point} from "chart.js";
import {interval, Observable} from 'rxjs';
import {map, toArray} from 'rxjs/operators';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
    .toolbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #1976d2;
    color: white;
    font-weight: 600;
  }

  .toolbar img {
    margin: 0 16px;
  }


  `

  ]
})
export class AppComponent {

staticData: any;
staticData2: any;
public x:String="0";
public y:String="0.02"
public z:String="50"
public p:String="2"
public q:String="4"


  constructor() {
  }

  onSubmit(f: NgForm) {
    this.staticData=f.value;
  }

  onSubmit2(g: NgForm){
    this.staticData2=g.value;

  }
}
