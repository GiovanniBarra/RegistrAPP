import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr-asistencia',
  templateUrl: './qr-asistencia.page.html',
  styleUrls: ['./qr-asistencia.page.scss'],
})
export class QrAsistenciaPage implements OnInit {

  constructor
  (
    private router: Router,
    private alertcontroler: AlertController,
  ) { }

  cerrarSesion() {
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
  }

}
