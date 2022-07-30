import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Skill } from '../skill.model';

@Component({
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.css']
})
export class AboutMePageComponent implements OnInit, AfterViewInit{

  @ViewChild('line') line!:ElementRef<HTMLDivElement>;
  @ViewChild('text0') textA!:ElementRef<HTMLSpanElement>;
  @ViewChild('text1') textB!:ElementRef<HTMLSpanElement>;
  @ViewChild('text2') textC!:ElementRef<HTMLSpanElement>;
  @ViewChild('text3') textD!:ElementRef<HTMLSpanElement>;
  @ViewChild('text4') textE!:ElementRef<HTMLSpanElement>;
  
  vtext0 = false;
  vtext1 = false;
  vtext2 = false;
  vtext3 = false;
  vtext4 = false;

  backSkills:Skill[] = []
  frontSkills:Skill[] = []

  constructor() { 
    this.backSkills.push(
      {
        name:'JAVA',
        experienceQuantity:4,
        subSkills:['hibernate', 'hql', 'spring', 'spring boot','spring security','jwt', 'jpa', 'junit']},
      {
        name:'SQL',
        experienceQuantity:3,
        subSkills:['MySql', 'mariaDb', 'postgress']},
      {
        name:'Java Script',
        experienceQuantity:4,
        subSkills:['express', 'sequelize', 'ddd', 'jwt', 'session', 'type-script']},
    ),
    this.frontSkills.push(
      {
        name:'HTML',
        experienceQuantity:4,
        subSkills:[]},
      {
        name:'CSS',
        experienceQuantity:4,
        subSkills:[]},
      {
        name:'ANGULAR',
        experienceQuantity:4,
        subSkills:[]},
      {
        name:'REACT',
        experienceQuantity:3,
        subSkills:[]},
    )
  }

  ngAfterViewInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:any){
    let lineRect = this.line.nativeElement.getBoundingClientRect();
    this.vtext0 = this.detectColision(lineRect, this.textA.nativeElement.getBoundingClientRect())
    this.vtext1 = this.detectColision(lineRect, this.textB.nativeElement.getBoundingClientRect())
    this.vtext2 = this.detectColision(lineRect, this.textC.nativeElement.getBoundingClientRect())
    this.vtext3 = this.detectColision(lineRect, this.textD.nativeElement.getBoundingClientRect())
    this.vtext4 = this.detectColision(lineRect, this.textE.nativeElement.getBoundingClientRect())
  }

  ngOnInit(): void {
    
  }

  detectColision(el1: any, el2: any){
    return !(el1.right < el2.left || 
                el1.left > el2.right || 
                el1.bottom < el2.top || 
                el1.top > el2.bottom)
  }
}
