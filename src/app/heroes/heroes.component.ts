import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:  Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
getHeroes(): void{
  this.heroes = this.heroService.getHeroes();
}

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

}
