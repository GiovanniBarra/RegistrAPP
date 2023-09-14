import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  constructor(
    private router:Router,
    private alertControler:AlertController,
    ) { }

    register() {
      this.router.navigate(["/login"]);
      this.alerta();
    }

    async alerta() 
  {
    const alert = await this.alertControler.create({
      header: "Aviso",
      subHeader: "",
      message: "Su cuenta a sido creada con exito",
      buttons: ['OK'],
      backdropDismiss: true,
    });

    await alert.present();

  }

}
