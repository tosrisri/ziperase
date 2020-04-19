import { Component, OnInit } from '@angular/core';
import { AppToastService } from "../global-toast.service";

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent implements OnInit {

  constructor(public toastService: AppToastService) { }

  ngOnInit() {
  }

}
