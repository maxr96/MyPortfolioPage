/* angular */
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/* application */
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CvComponent } from './components/cv/cv.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'cv',  component: CvComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: '/portfolio', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
