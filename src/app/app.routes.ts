import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'header',component:HeaderComponent},
    {path:'**', component: PageNotFoundComponent} // Wildcard
];

