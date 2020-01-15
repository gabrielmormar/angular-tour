import { Injectable } from '@angular/core';
import { HEROES } from '../mocks/mock-heroes';
import { Hero } from '../models/hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //HEROES.forEach(h => this.messageService.add(h.name));
    this.messageService.add("Fetched heroes");
    return of(HEROES);
  }
}
