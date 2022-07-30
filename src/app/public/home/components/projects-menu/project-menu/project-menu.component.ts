import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-project-menu',
  templateUrl: './project-menu.component.html',
  styleUrls: ['./project-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
