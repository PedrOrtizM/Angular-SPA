import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import {HeroesService,Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

heroes:Heroe[];
  constructor(private _heroe:HeroesService ,private activatedRoute: ActivatedRoute) {



  }

  ngOnInit() {
     this.activatedRoute.params.subscribe( params=>{
    this.heroes = this._heroe.buscarHeroes(params['term']);
  //  console.log(this.heroes);

    } )
  }

}
