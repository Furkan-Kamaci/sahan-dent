import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "home-page", loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)},
    {path: "content-try-page", loadComponent: () => import('./pages/content-try-page/content-try-page.component').then(m => m.ContentTryPageComponent)},
    {path: "about-page", loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.AboutPageComponent)},
    {path: "", redirectTo: "home-page", pathMatch: "full"},
];
