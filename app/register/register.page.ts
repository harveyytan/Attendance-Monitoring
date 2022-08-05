import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class RegisterPage implements OnInit {

 // your_name: string = "";
  //last_name: string = "";
//gender: string = "";
//pNumber: string = "";
 // address: string = "";
 // pass: string = "";
 // section: string = "";

  //disabledButton;

   constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }


  tryRegister(){
    this.router.navigate(['/login']);
  }

//ionViewDidEnter(){
 //   this.disabledButton = false;
  //}
  
//  async tryRegister(){
 //   if(this.your_name==""){
 //     this.presentToast('Your Name is Required');
  //  }else if(this.last_name==""){
   //   this.presentToast('Your Last Name is Required');
   // }else if(this.gender==""){
   //   this.presentToast('Gender is Required');
   // }else if(this.pNumber==""){
   //   this.presentToast('Phone Number is Required');
   // }else if(this.address==""){
    //  this.presentToast('Address is Required');
    //}else if(this.pass==""){
    //  this.presentToast('Password is Required');
   // }else if(this.section==""){
    //  this.presentToast('Section is Required');
   // }
     
   //     }
    
  

 // async presentToast(a){
   // const toast = await this.toastCtrl.create({
   //   message: a,
 //     duration: 1500,
 //     position: 'top'
 //   });
 //   toast.present();
 // }

}


