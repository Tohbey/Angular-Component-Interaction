import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() loggedIn!: boolean;

  private _loggedIn!: boolean;
  message!:string;
  message1!:string;
  message2!: string;
  name: string = "tobey";
  @Output() greetEvent = new EventEmitter();

  //using setters and getters
  get isLoggedIn(){
    return this._loggedIn
  }
  @Input()
  set isLoggedIn(value: boolean){
    this._loggedIn = value;
    if(value === true){
      this.message = "Welcome back tobey setters and getters"
    }else{
      this.message = "Please log in setters and getters"
    }
  }

  //ngOnChanges -> it workers with only child component
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const logginValue = changes['loggedIn'];
    if(logginValue.currentValue === true){
      this.message1 = "Welcome back tobey ngOnChange";
    }else{
      this.message1 = "Please log in ngOnChange";
    }
  }

  //template reference variables
  greatTobey(){
    alert('Hey Tobey template reference variable')
  }

  constructor() { }

  ngOnInit(): void {
  }

  callParentGreet(){
    this.greetEvent.emit()
  }
}
