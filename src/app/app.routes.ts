import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AlotPageComponent } from './alot-page/alot-page.component';
export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path : 'login', component:LoginPageComponent},
    {path : 'alot', component:AlotPageComponent}
  
];
