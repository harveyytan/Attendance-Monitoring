import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  tryStaff(){
    this.router.navigate(['/dashboard']);
  }

}
