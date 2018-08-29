import { HomeComponent } from "../home/home.component";
import { GameComponent } from "../game/game.component";


export const ROUTES=[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'game/:city',
        component:GameComponent
    }
]