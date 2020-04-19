import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { ZiperaseService} from  '../ziperase.service';
import { AppToastService } from '../global-toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // show = false;
  // toggleShow() {
  //   this.show = !this.show;
  // }

  username:string;
  password:string;

  constructor(private router: Router, private ziperaseService: ZiperaseService, public toastService: AppToastService) { }

  ngOnInit() {
    const token = window.localStorage.getItem('token')
    if(token) {
      this.ziperaseService.testToken(token)
        .subscribe(data => {
          this.router.navigateByUrl('/lpage');
        })
    }
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      const data = {
        username: this.username,
        password: this.password
      }
      this.ziperaseService.login(data)
        .subscribe(data => {
          this.toastService.show('Success!', 'Log successful');
          this.router.navigateByUrl('/lpage');
          window.localStorage.setItem('token', data.token_type+' '+data.access_token)
        })
    } else {
      alert('Email and password both are required');
    }
  }

  // LoginUser() {
  //   if(this.username == "tosrisri@gmail.com" && this.password == "Srinivas@123") {
  //     console.log("Login Successful!");
  //   }
  // }

}

