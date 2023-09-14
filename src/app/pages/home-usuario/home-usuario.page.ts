import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.page.html',
  styleUrls: ['./home-usuario.page.scss'],
})
export class HomeUsuarioPage  {

  constructor(
    private router: Router,
    private AlertController: AlertController,
  ) { }

  cerrarSesion() {
    this.router.navigate(["/login"]);
    this.alerta();
  }

  async alerta() 
  {
    const alert = await this.AlertController.create({
      header: "Aviso",
      subHeader: "Adios",
      message: "su sesion se a cerrado con exito",
      buttons: ['OK'],
      backdropDismiss: true,
    });

    await alert.present();

  }

}
