import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule} from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { JwtAuthHttpInterceptService } from './service/jwt-auth-http-intercept.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:JwtAuthHttpInterceptService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
