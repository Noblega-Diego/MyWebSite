import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subTitleCode',
  templateUrl: './subTitleCode.component.html',
  styleUrls: ['./subTitleCode.component.css']
})
export class SubTitleCodeComponent implements OnInit {

  text = ""
  index= 0
  constructor() { }

  ngOnInit() {
    let texts =["Developer Backend", "Developer Frontend", "Contactame"]
    
    new Observable((obs)=>{
      let funI: any = "";
      const removeText= ()=>{
        funI = setInterval(()=>{
          if(this.text.length === 0){
            if(this.index < texts.length)
              showText(texts[this.index ++])
            else{
              this.index = 0
              showText(texts[this.index])
            }
            clearInterval(funI)  
          }else
          obs.next('!')
        }, 150)
      }
      const showText = (tex:string) => {
        let texto = Array.from(tex)
        setTimeout(() => {
          funI = setInterval(()=>{
            if(texto.length != 0){
              obs.next(texto.shift())
            }else{
              if(this.text.length === 0){
                if(this.index < texts.length)
                  showText(texts[this.index ++])
                else{
                  this.index = 0
                  showText(texts[this.index])
                }
                clearInterval(funI)  
              }
              else{
                setTimeout(()=>{
                  removeText()
                }, 600)
                clearInterval(funI)
              }
            }
          }, 150)    
        }, 200);
      }
      showText(texts[0])
      }).subscribe((a)=>{
        if(a!=='!')
          this.text += a
        else{
          this.text = this.text.substring(0,this.text.length-2)
        }
      })
  }

}
