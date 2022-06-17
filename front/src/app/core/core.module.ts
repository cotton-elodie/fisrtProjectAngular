import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],

  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    HttpInterceptorProviders
  ]
})
export class CoreModule { }
