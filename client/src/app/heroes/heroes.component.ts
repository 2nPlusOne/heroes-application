import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = []; 

  constructor(private heroService: HeroService, private messageService: MessageService) {
    // We don't call getHeroes() here, because it is bad practice to call a
    // synchronous method in the constructor. The constructor shouldn't DO
    // anything. It should just set the initial state of the component.
    // Instead, we call getHeroes() in the ngOnInit lifecycle hook.
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  } 
}
