import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillComponent implements OnInit {

  @Input() title:String = "";
  @Input() experienceQuantity:Number = 0;
  @Input() subSkills:String[] = [];

  isVisibleSubSkill: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

}
