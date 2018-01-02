import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heros';
  //aditya = "ABCDE";

  constructor(){
    //let samir = "abc";
    //Once in every second, print out variable aditya
    //setInterval(() => {console.log(this.aditya)}, 1000);

    //After some unknown processing, I am changing aditya
    //setTimeout(() => {this.aditya = "HELLO WORLD"}, 10000);
  }
}
