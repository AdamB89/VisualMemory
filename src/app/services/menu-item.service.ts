import { Injectable } from '@angular/core';
import {Item} from '../classes/MenuItem';
import {ITEMS} from '../shared/Items';
import {of,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor() { }
  
  getMenuItems():Observable<Item[]>{
    return of(ITEMS);
  }
}
