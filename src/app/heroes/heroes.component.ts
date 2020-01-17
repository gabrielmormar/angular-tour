import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HEROES } from '../mocks/mock-heroes';
import { HeroService } from '../services/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heros: Hero[];

  // hero: Hero = {
  //   id: 1,
  //   name: "Batman"
  // }

  // selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heros = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }

}
