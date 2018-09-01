import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router } from "@angular/router";
import {Card} from '../classes/Card';
import { CardService } from '../services/card.service';
import { iif } from 'rxjs';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
   //city name
  city:string;
   //the array that hold the cards
  cards :Card[];
  // game managment varibles.
  counter:number;
  opencard:number;
  pairs:number;
  inShow:boolean; 
  msg:string;
  endmsg:string;
  done:boolean;
  constructor(
    private activeRouter:ActivatedRoute,
    private router:Router,
    private cardService:CardService
  ) { }

  ngOnInit() {
    this.activeRouter.params
    .subscribe((params)=>{
      this.city=params['city'];
        this.cardService.getCardByCity(this.city)
        .subscribe(cards=>{
          this.cards=cards;
          this.startGame();
        })
    })
  }
  
  startGame(){
    this.duplicteArray();
   this.setUpGame();
  }

  

  setUpGame(){
     this.done=false;
     this.counter=0;
     this.pairs=0;
     this.opencard=-1;
     this.inShow=false;
     this.cards.forEach(card=>{
       card.show=false;
     });
     this.msg=`Choose a card, click on it`;
    this.shuffleArray();
  }

  clickOnCard(index:number){
     if(this.inShow   ){
       return;
     }
     if(this.cards[index].show){
       return;
     }
     
     this.inShow=true;
     this.counter++;
     let even =this.counter%2==0;
     
     this.cards[index].show=true;
     setTimeout(()=>{
              let foundPair=false;
              if(!even){
               
                this.opencard=index;
                this.msg=`now try to find a match for this picture`;
              }else{
              
                
                if(this.opencard>=0 && index!==this.opencard){
                    let otherid = this.cards[this.opencard].id;
                    let id =this.cards[index].id
                    console.log(otherid,id);
                    if(otherid===id){
                      this.pairs++;
                     
                      this.cards[index].show=true;
                      this.cards[this.opencard].show=true;
                      foundPair=true;
                    }
                }
                this.msg=`Choose a card, click on it`;
              }
              
              if(!foundPair){
                this.cards[index].show=false;
              }
           
              this.inShow=false;
             if(this.pairs===this.cards.length/2){
               return this.endGame(true);
             }
     },800)
  }

 
  shuffleArray(){
    for(let i =0;i<this.cards.length;i++){
      let random=Math.floor((Math.random() * i) );
      let temp= this.cards[random];
      this.cards[random]=this.cards[i];
      this.cards[i]=temp;
    }
  }
  duplicteArray(){
    let aux :Card[]=[];
    this.cards.forEach((card)=>{
      aux.push({
        id:card.id,
        city:card.city,
        image:card.image,
        backside:card.backside,
        show:card.show
      });

    })
    aux.forEach(card=>{
      this.cards.push(card);
    })
   }

   homePage(){
     this.router.navigate(['']);
   }

   endGame(bool:boolean){
      if(bool){
        this.endmsg=`greate job. it took you ${this.counter} to find all pairs.`
      }else{
        this.endmsg=`Nice try. come back another time to play again`;
      }
      this.done=true;
      setTimeout(()=>{
          this.done=false;
          this.router.navigate(['']);
      },2500)
   }
    
  
}
