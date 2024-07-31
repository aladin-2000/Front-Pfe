import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/views/home.component';
import { LoginPageComponent } from './features/login-page/views/login-page.component';
import { AlotPageComponent } from './features/alot-page/views/alot-page.component';
import { RegisterPageComponent } from './features/register-page/views/register-page.component';
export const routes: Routes = [
    {path:'home',component: HomeComponent},
    {path : 'login', component:LoginPageComponent},
<<<<<<< HEAD
    {path : 'register', component:RegisterPageComponent},
    {path : 'alot', component:AlotPageComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
=======
    {path : 'alot', component:AlotPageComponent},
    {path : 'home', component:HomeComponent}
>>>>>>> 428e10b (save local changes before merging main)
  
];
