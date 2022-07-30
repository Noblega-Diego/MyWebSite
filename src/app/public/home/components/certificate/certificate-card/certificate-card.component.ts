import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificateCardComponent implements OnInit {
  @Input() imageUrl!:String
  @Input() title!:String
  @Input() date!:Date
  
  constructor() { }

  ngOnInit(): void {
  }

}
