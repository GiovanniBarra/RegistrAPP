import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private router:Router,
    private alertControler:AlertController,
    ) { }

    onsubmit(){
      this.router.navigate(["/login"])
    }

  ngOnInit() {
  }

}
