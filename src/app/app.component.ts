import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  showtext = false;
  toggleText():void{
    this.showtext = !this.showtext
  }
}
// export class AppComponent{
//   title = "Abu Suraj";
//   roll = 0;
//   getMax(a:number, b: number, c: number){
//    if(a>b){
//     if(a>c){return a;}
//     else return c;
//    }
//    else{
//     if(b>c) return b;
//     else return c;
//    }
//   }
// }
// export class AppComponent implements OnInit {
//   // title = 'v-series';
//   intervalSub: any ;
//   ngOnInit(){
//     this.intervalSub = setInterval(() =>{
//       console.log("hello from ngOninit")
//     },1000);
//   }
//   ngOnDestroy(){
//     if(this.intervalSub){
//       clearInterval(this.intervalSub)
//     }
//   }
// }
