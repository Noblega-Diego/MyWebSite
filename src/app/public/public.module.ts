import { SubTitleCodeComponent } from './home/components/subTitleCode/subTitleCode.component';
import { FirstCubeComponent } from './home/components/scene/first-cube/firstCube.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryPageComponent } from './home/components/primary-page/primary-page.component';
import { MyPersonalTitleComponent } from './home/components/my-personal-title/my-personal-title.component';
import { AboutMePageComponent } from './home/components/about-me-page/about-me-page.component';
import { TitleDescriptionComponent } from './home/components/title-description/title-description.component';
import { SkillComponent } from './home/components/skill/skill.component';
import { OptionOfMenuComponent } from './home/components/projects-menu/option-of-menu/option-of-menu.component';
import { ProjectMenuComponent } from './home/components/projects-menu/project-menu/project-menu.component';
import { CertificatePanelComponent } from './home/components/certificate/certificate-panel/certificate-panel.component';
import { CertificateCardComponent } from './home/components/certificate/certificate-card/certificate-card.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    PrimaryPageComponent,
    MyPersonalTitleComponent,
    FirstCubeComponent,
    SubTitleCodeComponent,
    AboutMePageComponent,
    TitleDescriptionComponent,
    SkillComponent,
    OptionOfMenuComponent,
    ProjectMenuComponent,
    CertificatePanelComponent,
    CertificateCardComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    AboutMePageComponent
  ]
})
export class PublicModule { }
