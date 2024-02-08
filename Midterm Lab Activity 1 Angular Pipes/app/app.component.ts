import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time$: Observable<Date>;

  title = 'midterm';

  presentDate = new Date();

  Fruits = ["6","5","4","3","2","1"];
  price : number = 20000;
ngOnInit(){}
  constructor(){
    this.time$ = interval (1000).pipe(map(()=>new Date()))
  }





  //percent pipes
num1:number = 0.59;
num2:number = 1.259;

//json pipes
object1: Object = {A: 'Banana', B: 'Orange', C: {Cake: 1, numbers: [2, 4, 6, 8, 10]}};
object2: Object = {foo: 'Queen', baz: 'King', nested: {xyz: 3, numbers: [1, 2, 3, 5, 7]}};
object3: Object = {X: 'park', Y: 'Yoyo', Z: {Zebra: 3, numbers: [10, 20, 30, 40, 50]}};

  


}
