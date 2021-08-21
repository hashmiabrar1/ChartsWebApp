import {Component, OnInit} from '@angular/core';
import {Point} from "chart.js";
import {interval, Observable} from 'rxjs';
import {map, toArray} from 'rxjs/operators';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  template: `
  <div class="toolbar" role="banner">
  <img
    width="140"
    alt="Angular Logo"
    src="assets/niu.png"
  />
  <span>Northern Illinois University</span>
    <div class="spacer"></div>
</div>
<br> <br>
<h2>Enter the following values to create a graph:</h2>
<div>
<form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
     

        Start Time<input name="first" [(ngModel)]="x" required #first="ngModel">
        End Time<input name="last" [(ngModel)]="y" #last="ngModel" required>
        Maximum Value<input name="max" [(ngModel)]="z" required #max="ngModel">



      <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Create Graph</button>
        </form>

        <div *ngIf="last.errors?.customMax"> 
          Maximum number can be 0.019.
        </div> 

      <app-line-chart [datap]="staticData"></app-line-chart>
      </div>
  `,
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
public x:String="0";
public y:String="0.02"
public z:String="50"


  constructor() {
  }

  onSubmit(f: NgForm) {
    this.staticData=f.value;
    console.log(this.staticData);
  }
}
