import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.page.html',
  styleUrls: ['./add-staff.page.scss'],
})
export class AddStaffPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  cancel1(){
    this.router.navigate(['/dashboard']);
  }

  addStaff(){
    this.router.navigate(['/staff']);
  }

}
