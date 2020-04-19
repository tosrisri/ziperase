import { Component, OnInit } from '@angular/core';
import { ZiperaseService } from '../ziperase.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-lpage',
  templateUrl: './lpage.component.html',
  styleUrls: ['./lpage.component.css']
})
export class LpageComponent implements OnInit {

  constructor(private router: Router, private ziperaseService: ZiperaseService) { }

  userprofile = "My Profile";

  ngOnInit() {
  }

  LogoutUser() {
    let token = window.localStorage.removeItem('token');  
    this.router.navigateByUrl('/login');
  }

}
