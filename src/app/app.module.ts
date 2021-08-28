import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseComponent,
    HomeComponent,
    PageNotFoundComponent,
    MapRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AllInterceptor, multi: true, deps: [AuthService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
