import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit, AfterViewInit {

  constructor() { }
  interpolation:string = "Example of interpolation";
  imageUrl: string = "https://picsum.photos/200/300";
  count = 0;
  name!: string;
  username!: string;
  private _customerName!: string;
  @ViewChild('nameRef') nameElementRef!: ElementRef;

  get customerName(): string{
    return this._customerName;
  }

  set customerName(value: string){
    this._customerName = value;
    if(value === 'tobey'){
      alert('Welcome back '+this.username);
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.nameElementRef.nativeElement.focus();
      console.log(this.nameElementRef);
  }

  increment(){
    this.count += 1;
  }

  greet(updatedValue: any){
    this.username = updatedValue;
    if(this.username === 'tobey'){
      alert('Welcome back '+this.username);
    }
  }
}
