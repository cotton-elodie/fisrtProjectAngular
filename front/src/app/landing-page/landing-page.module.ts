import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingPageComponentComponent } from './components/landing-page/landing-page-component/landing-page-component.component';



@NgModule({
  declarations: [
    LandingPageComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    LandingPageComponentComponent
  ]
})
export class LandingPageModule { }
