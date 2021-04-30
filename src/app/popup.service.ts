import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  abc(comp1Obj){
    comp1Obj.show =   true;
    comp1Obj.varbuttons=comp1Obj.buttons;
  }

}
