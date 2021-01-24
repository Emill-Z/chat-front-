import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './common/services/user.service';
import { AuthInterceptor } from './common/services/auth.interceptor';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './common/services/auth.service';
// import config from '../appConfig';
import { ModuleAuthGuard } from './common/guards/module-auth-guard';

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
    AuthService,
    ModuleAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
