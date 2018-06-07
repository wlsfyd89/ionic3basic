import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContentPage } from '../content/content'
import { FormGroup, FormControl,Validators } from '@angular/forms';

import { TabsPage} from '../tabs/tabs';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public rest: RestProvider) {

  }

 
  // username: string;
  // userpassword: string;
  // login(){    
  //   alert('Id : ' + this.username + "/" + "password : " + this.userpassword);    
  //   this.navCtrl.push(ContentPage,{param: 4});  
  // }
  


  userForm: FormGroup;

    ngOnInit() {
      this.userForm = new FormGroup({
        
        userid: new FormControl('',[
          Validators.required,
          Validators.pattern('[a-zA-Z0-9]{4,10}')          
        ]),
        
        password: new FormControl('',Validators.compose([
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
        ]))    
      });           
      console.log(this.userForm); // FormGroup
    }

    login(){
      if (this.userForm.valid) {
        alert('Id : ' + this.userForm.controls['userid'].value + "/" + "password : " + this.userForm.controls['password'].value);

        if(this.rest.checkLogin()) {
          alert("로그인 성공...메인화면으로 이동");
          // this.navCtrl.push(ContentPage,{param: 4.3});  
          this.navCtrl.push(TabsPage,{param: 4.3});  
          //this.navCtrl.setRoot(ContentPage,{param: 4.3}); 
        } else {
          alert("로그인 실패...다시 로그인해주세요.");
        }     
      }
    }

}
