import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  tryAddendace(){
    this.router.navigate(['/attendance']);
  }

  tryRegister(){
    this.router.navigate(['/register']);
  }

  addStaff(){
    this.router.navigate(['/add-staff']);
  }

  staffLog(){
    this.router.navigate(['/staff']);
  }

  viewStudent(){
    this.router.navigate(['/login']);
  }

  signout1(){
    this.router.navigate(['/front']);
  }

}
