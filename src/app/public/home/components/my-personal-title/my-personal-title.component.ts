import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-my-personal-title',
  templateUrl: './my-personal-title.component.html',
  styleUrls: ['./my-personal-title.component.css']
})
export class MyPersonalTitleComponent implements OnInit {

  private presentacion = "Diego Noblega"
  private adorno = "String name = "
  sizeMini = true
  hidden = true
  title: string = ""
  span: string = ""

  constructor() { }

  ngOnInit(): void {
    this.hidden = false    
    new Observable((obs)=>{
      let texto = Array.from(this.adorno)
      let funI: any = "";
      funI = setInterval(()=>{
        if(texto.length != 0){
          obs.next(texto.shift());
        }
        else{
          obs.complete()
          clearInterval(funI!)
        }
      }, 150)
    }).subscribe((a)=>{
      this.span += a
    })
    setTimeout(() => {
      new Observable((obs)=>{
        this.sizeMini = false
        let texto = Array.from(this.presentacion)
        let funI: any = "";
        funI = setInterval(()=>{
          if(texto.length != 0)
          obs.next(texto.shift());
          else{
            obs.complete()
            clearInterval(funI!)
          }
        }, 150)
      }).subscribe((a)=>{
        this.title += a
      })
    }, this.adorno.length * 150);
    setTimeout(()=>{
      this.hidden = true
    },this.adorno.length * 150 + this.presentacion.length * 150)
  }

}
