import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public label = 'hello world';

  public todos=[
    'Sunil',
    'Ramya',
    'Aaradhya',
    'Purush',
    'Puppy'
  ];

  constructor() {
  }

  ngOnInit() {
    this.label = 'hello angular';
  }

  buttonClick() {
    this.label = 'label changed on button click';
  };

}
