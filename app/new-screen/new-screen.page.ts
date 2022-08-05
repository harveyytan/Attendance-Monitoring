import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-screen',
  templateUrl: './new-screen.page.html',
  styleUrls: ['./new-screen.page.scss'],
})
export class NewScreenPage implements OnInit {

  name = 'Im Harvey Tan';

  isReleased = false;

  public person: any = [
    {id:1, name: 'Harvey Tan', age: 21}
  ];

  constructor() { }

  ngOnInit() {
  }

}
