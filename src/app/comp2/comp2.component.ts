import { Component, OnInit } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  imports: [AlertComponent]
})
export class Comp2Component implements OnInit {
  show = false;
  buttons;

  constructor() { }

  ngOnInit() {
  }

}
