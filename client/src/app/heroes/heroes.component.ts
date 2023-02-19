import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = []; 
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {
    // We don't call getHeroes() here, because it is bad practice to call a
    // synchronous method in the constructor. The constructor shouldn't DO
    // anything. It should just set the initial state of the component.
    // Instead, we call getHeroes() in the ngOnInit lifecycle hook.
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  } 
}
