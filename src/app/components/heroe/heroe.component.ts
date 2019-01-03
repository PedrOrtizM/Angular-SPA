import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

heroe:any = {};

  constructor( private _heroe:HeroesService ,private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( params=>{
    this.heroe = _heroe.getHeroe(params['id']);

    } )

  }

}
