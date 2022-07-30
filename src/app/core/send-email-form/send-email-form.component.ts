import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';



@Component({
  selector: 'app-send-email-form',
  templateUrl: './send-email-form.component.html',
  styleUrls: ['./send-email-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendEMailFormComponent implements OnInit{

  name!: string;
  yourEmail!: String;
  subject!: String;
  content!: String;

  constructor() { }
 

  ngOnInit(): void {
  }

}
