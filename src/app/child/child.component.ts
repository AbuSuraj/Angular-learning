import { Component,OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() childMessage: string;
//  @Input() childMessage2: string;
  constructor() { 
    this.childMessage  =  "I am a Child"
    // this.childMessage2  =  "I am a Child2"
  }

  ngOnInit(): void {
  }

}
