import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { LoaderComponent } from './components/loader/loader.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService } from './shared/services/local-storage.service';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { CookiesService } from './shared/services/cookies.service';
import { NgxsModule } from '@ngxs/store';
import { LoaderState } from './store/loader/loader.state';
import { environment } from 'src/environments/environment';
import { SidebarState } from './store/sidebar/sidebar.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ApiInterceptor } from './shared/interceptors/api.intercepter';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    NgxsModule.forRoot([LoaderState, SidebarState], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    CookiesService,
    LocalStorageService,
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
