import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-parametros',
  templateUrl: './test-parametros.page.html',
  styleUrls: ['./test-parametros.page.scss'],
})
export class TestParametrosPage implements OnInit {
  public id : number = 0;
  public nombre: string = '';
  public estado : string = '';
  public foto : string | undefined ;

  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(parametros =>{
      this.id = parametros['id'] || 'Sin id asignado';
      this.nombre = parametros['nombre'] || 'Sin nombre asignado';
      this.estado = parametros['estado'] || 'Sin estado asignado';
      this.foto = parametros['foto'] || 'Sin foto asignada';
    })
  }

}
