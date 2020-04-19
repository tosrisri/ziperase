import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ZiperaseService } from '../ziperase.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  constructor(private ziperaseService : ZiperaseService) { }

  onSubmit(f: NgForm){
    if(f.valid) {
      if(this.newPassword === this.confirmPassword) {
        this.ziperaseService.resetPassword(this.oldPassword, this.confirmPassword)
          .subscribe( data => [

          ])
      }
    } else{
      
    }
  }

  ngOnInit() {
  }

}
