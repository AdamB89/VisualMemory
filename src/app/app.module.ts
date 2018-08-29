import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { MenuItemService } from './services/menu-item.service';

import {RouterModule} from '@angular/router';
import {ROUTES} from './routes/routes';
import { CardService } from './services/card.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MenuItemService,CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
