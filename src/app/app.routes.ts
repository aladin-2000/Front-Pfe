import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AlotPageComponent } from './alot-page/alot-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
export const routes: Routes = [
    {path:'home',component: HomeComponent},
    {path : 'login', component:LoginPageComponent},
    {path : 'register', component:RegisterPageComponent},
    {path : 'alot', component:AlotPageComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  
];
