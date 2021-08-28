import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AllInterceptor } from './interceptors/all.interceptor';
import { AuthService } from './services/auth.service';
import { BaseComponent } from './components/base/base.component';
import { HomeComponent } from './components/home/home.component';
import { MapRenderComponent } from './components/map-render/map-render.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseComponent,
    HomeComponent,
    PageNotFoundComponent,
    MapRenderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFyWTfPiT9v2c29nAwRH0X9Q0dVk0MKkk'
    })
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AllInterceptor, multi: true, deps: [AuthService, Router] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
