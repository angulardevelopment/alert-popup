import { Component, OnInit, Input, TemplateRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {


@Input() title;
@Input() buttonRow: TemplateRef<any>;
@Input() isOpen = false;
variable: 'open';
  constructor() { }

  ngOnInit() {


  }

}
