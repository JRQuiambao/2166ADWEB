import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Data_Binding';
  clientName = "Jose Raphael T. Quiambao";
  appliedCSS = "green";
  notAppliedCSS = "false";
  myColor = "red";

  clickCount=0
  clickme(){
    this.clickCount++;
  }
}
