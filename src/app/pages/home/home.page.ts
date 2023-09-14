import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre:string=''

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertcontroler: AlertController,
  ) 
  {
    activatedRoute.queryParams.subscribe
    (
      params => 
      {
        if (params["usuario"])
        {
          this.nombre=params["usuario"]
        }
      }
    )
  }

  cerrarSesion() {
    this.router.navigate(["/login"]);
    this.alerta();
  }

  async alerta() 
  {
    const alert = await this.alertcontroler.create({
      header: "Aviso",
      subHeader: "Adios",
      message: "su sesion se a cerrado con exito",
      buttons: ['OK'],
      backdropDismiss: true,
    });

    await alert.present();

  }



}
