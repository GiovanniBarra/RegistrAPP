import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-c',
  templateUrl: './recuperar-c.page.html',
  styleUrls: ['./recuperar-c.page.scss'],
})
export class RecuperarCPage {

  constructor(
    private router:Router,
    private AlertController:AlertController,
  ) { }

  recuperarContrasena() {
    this.router.navigate(["/login"]);
    this.alerta();
  }

  async alerta() 
  {
    const alert = await this.AlertController.create({
      header: "Aviso",
      subHeader: "------------------------------",
      message: "Se le a enviado un  correo para restablecer su contraseña",
      buttons: ['OK'],
      backdropDismiss: true,
    });

    await alert.present();

}
}
