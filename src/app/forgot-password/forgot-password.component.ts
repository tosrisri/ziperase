import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ZiperaseService} from  '../ziperase.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  fpemail: string;

  constructor(private ziperaseService: ZiperaseService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
   this.ziperaseService.forgotPassword(this.fpemail)
    .subscribe(data => {
      console.log(data);
    })

   
  }

}
