import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/game';
import { Http } from "@angular/http";
import { Room, Player, Quote } from '../models/game';
import { GameService } from '../models/game.service';
import { Router } from '@angular/router';
import { Image } from '../widgets/picture-chooser/picture-chooser.component'

var work = document.getElementById("e1");
var set = document.getElementById("e2");
var rep = document.getElementById("e3");
//var workout = extend(work, set, rep);
//console.log(workout);



@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  room = new Room();
  me: Player;

  constructor(private http: Http, public game: GameService, private router: Router) { }

  ngOnInit() {
    if(this.game.me == null){
        this.router.navigate(['/login']);
    }
    this.me = this.game.me;
    setInterval(()=> this.update(), 1000)
}

   update(){
    this.http.get(this.game.apiRoot + "/game/room").subscribe( data =>{
        this.room = data.json();
    });
}

  submitWorkout(e: MouseEvent, workout: Workout,){
    e.preventDefault();
    const data = {};
    this.http.post(this.game.apiRoot + "/game/room/workouts", data).subscribe(res=>{
         this.room.workouts.push( res.json() );    
         console.log("Error")        
    })
}







}
