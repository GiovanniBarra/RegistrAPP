import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.page.html',
  styleUrls: ['./home-usuario.page.scss'],
})
export class HomeUsuarioPage  {

  nombre:string=''

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private alertcontroler: AlertController,
  ) 
  {
    ActivatedRoute.queryParams.subscribe
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
