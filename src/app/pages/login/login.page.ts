import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    username:"",
    password:""
  }

  constructor(
    private router:Router,
    private alertControler:AlertController,
    ) { }

onsubmit(){
  if(this.usuario.username=="admin@gmail.com" && this.usuario.password=="12345")
  {
    let user: NavigationExtras=
    {
      queryParams:
      {
        usuario: this.usuario.username,
      }
    }
    this.router.navigate(["/home"],user)
  }

  if(this.usuario.username=="alumno@gmail.com" && this.usuario.password=="12345")
  {
    this.router.navigate(["/home-usuario"])
  }
  
    }

  ngOnInit() {
  }

}
