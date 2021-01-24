import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './common/http-services/User.service';
import { AuthInterceptor } from './common/http-services/AuthInterceptor.interceptor';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import config from '../appConfig';

// export const AppConfig = new InjectionToken('AppConfig');

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    HttpClient,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // {
    //   provide: AppConfig,
    //   useValue: config
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
