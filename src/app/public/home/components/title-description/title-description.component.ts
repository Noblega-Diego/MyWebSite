import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-title-description',
  templateUrl: './title-description.component.html',
  styleUrls: ['./title-description.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleDescriptionComponent implements OnInit {

  @Input() title!:String;
  @Input() description!:String;

  constructor() { }

  ngOnInit(): void {
  }

}
