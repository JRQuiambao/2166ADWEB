import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_bootsrap';

  clickCount=0
  clickme(){
    this.clickCount++;}

  resetClickCount(){
    this.clickCount=0;
  }

}
