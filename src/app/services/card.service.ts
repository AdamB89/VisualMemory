import { Injectable } from '@angular/core';
import {Card} from '../classes/Card';

import {CARDS} from '../shared/Cards';

import {of,Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCardByCity(city:string):Observable<Card[]>{
    return of(CARDS.filter((card)=>{return card.image.includes(city.toLowerCase())}))
  }
}
