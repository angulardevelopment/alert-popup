import { Component, OnInit, Renderer2, ViewChild, TemplateRef } from '@angular/core';
import { PopupService } from '../popup.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {


  show = false;
  varbuttons;
  @ViewChild('buttons', { static: false }) buttons: TemplateRef<any>;
  @ViewChild('buttons2', { static: false }) buttons2: TemplateRef<any>;

  constructor(private ds: PopupService) { }

  ngOnInit() {
  }

  btnFromService() {
    this.ds.abc(this);
  }



  btn1() {
    console.log('btn1');

  }

  btn2() {
    console.log('btn2');

  }
  alert1() {
    this.show = !this.show;
    this.varbuttons = this.buttons;
  }

}
