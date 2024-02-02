import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  staff = [ 
    { firstName: 'Allen', lastName: 'Serrano', email: 'ac2003@gmail.com', role: 'Admin' },   
    { firstName: 'John', lastName: 'Cena', email: 'johncena@yahoo.com', role: 'User' }, 
    { firstName: 'Dwayne', lastName: 'Johnson', email: 'therock@gmail.com', role: 'User' }, 
    { firstName: 'Elon', lastName: 'Musk', email: 'iregrettwitter@gmail.com', role: 'User' }, 
    { firstName: 'Bill', lastName: 'Gates', email: 'applelord@yahoo.com', role: 'User' } 
    ];

}
