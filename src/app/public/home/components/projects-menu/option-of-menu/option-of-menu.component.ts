import { Component, OnInit, ChangeDetectionStrategy, Optional, Input } from '@angular/core';

interface Optition{
  content:String
}
interface Optitions{
  0:Optition
  1:Optition
  2:Optition
}
@Component({
  selector: 'app-option-of-menu',
  templateUrl: './option-of-menu.component.html',
  styleUrls: ['./option-of-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionOfMenuComponent implements OnInit {

  @Input() selectedOption!:Number;
  options:Optition[] = [
    {content:"Collaborative Projects"},
    {content:"Personal Projects"},
    {content:"My Blog"}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
