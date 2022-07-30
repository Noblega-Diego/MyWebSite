import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from './public/home/components/about-me-page/about-me-page.component';

const routes: Routes = [
  {path:'', component:AboutMePageComponent},
  {path:'home', component:AboutMePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
