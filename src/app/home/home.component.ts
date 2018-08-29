import { Component, OnInit } from '@angular/core';
import {Item} from '../classes/MenuItem';
import { MenuItemService } from '../services/menu-item.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  items :Item[];
  constructor(private itemService:MenuItemService) { }

  ngOnInit() {
      this.itemService.getMenuItems()
      .subscribe((items)=>{this.items=items})
  }

}
