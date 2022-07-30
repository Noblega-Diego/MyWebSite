import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Certificado } from '../Certificado';

@Component({
  selector: 'app-certificate-panel',
  templateUrl: './certificate-panel.component.html',
  styleUrls: ['./certificate-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificatePanelComponent implements OnInit {
  certificados: Certificado[] = [
    {name:"Alkemy Java",date: new Date(), imageUrl:"/assets/certificate.png"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
