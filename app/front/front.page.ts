import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.page.html',
  styleUrls: ['./front.page.scss'],
})
export class FrontPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openLogin1(){
    this.router.navigate(['/login1']);
  }

}
