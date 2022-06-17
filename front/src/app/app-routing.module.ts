import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponentComponent } from "./landing-page/components/landing-page/landing-page-component/landing-page-component.component";

const routes: Routes = [
    { path: 'facesnaps', loadChildren:() => import('./face-snaps/face-snap.module').then(module => module.FaceSnapModule) },
    { path: '', component:LandingPageComponentComponent}
  
];
 
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRouttingModule {}