import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router:Router,
    private alertControler:AlertController,
    ) { }

onsubmit(){
  this.router.navigate(["/home"])
    }

  ngOnInit() {
  }

}
