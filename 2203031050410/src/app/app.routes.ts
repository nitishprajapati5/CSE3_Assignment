import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'contact-us',
        component:ContactUsComponent
    },
    {
        path:'about-us',
        component:AboutUSComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'logout',
        component:LogoutComponent
    }
];
