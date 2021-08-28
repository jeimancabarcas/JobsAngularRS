import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BaseComponent } from './components/base/base.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { 
    path: 'login', component: LoginComponent 
  },
  { 
    path: 'user', component: BaseComponent,
    children: [
      { path: 'home', component:  HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
    ]
  },
  { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
