import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  //Using @Input DEcorator to get color and text values from button from <app-button> component in header.comp.html
  //@Input color gets the metadata of color defined from <app-button> selector component
  @Input() color!:string;
  @Input() inText!:string;


  @Output() taskEmitOnButtonClick = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  addTask(){

    this.taskEmitOnButtonClick.emit();

  }

}
