import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostListComponent} from './post-list/post-list.component';
import {PostService} from "./services/post.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ScoresService} from "./services/scores.service";
import {PostCardComponent} from './post-card/post-card.component';
import {ScoresComponent} from './scores/scores.component';
import {CommentsComponent} from './comments/comments.component';
import {CommentsListComponent} from './comments-list/comments-list.component';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PostCreateComponent } from './post-create/post-create.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {CommentsService} from "./services/comments.service";


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8484/auth',
        realm: 'inst-project',
        clientId: 'inst-client'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCardComponent,
    ScoresComponent,
    CommentsComponent,
    CommentsListComponent,
    PostCreateComponent,
    LoginComponent,


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    KeycloakAngularModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    PostService,
    ScoresService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
