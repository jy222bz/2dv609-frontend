import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { LoaderComponent } from './components/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { NgxsModule } from '@ngxs/store';
import { LoaderState } from './store/loader/loader.state';
import { environment } from 'src/environments/environment';
import { SidebarState } from './store/sidebar/sidebar.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ApiInterceptor } from './shared/interceptors/api.intercepter';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthState } from './store/auth/auth.state';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressBarModule,
    NgxsModule.forRoot([LoaderState, SidebarState, AuthState], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
