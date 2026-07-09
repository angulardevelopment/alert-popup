import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HomeComponent]
})
export class AppComponent {
    title = 'Global Error Handler Demo';
  data:any;
  getAverage(){
    let a = this.data?.sort().reduce((a:any,b:any)=>a+b)/this.data.length;
    console.log(a);
  }
}
