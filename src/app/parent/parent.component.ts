import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  userLoggedIn = true;

  @ViewChild(ChildComponent) childComponentRef!: ChildComponent
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.childComponentRef.message2 = "Message from parent component"
  }

  greet(){
    alert('From parents component')
  }
}
