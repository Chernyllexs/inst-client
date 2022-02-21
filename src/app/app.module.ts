import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PostListComponent } from './post-list/post-list.component';
import {PostService} from "./services/post.service";
import {Post} from "./model/post";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ScoresService} from "./services/scores.service";
import { PostCardComponent } from './post-card/post-card.component';
import { ScoresComponent } from './scores/scores.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsListComponent } from './comments-list/comments-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCardComponent,
    ScoresComponent,
    CommentsComponent,
    CommentsListComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    PostService,
    ScoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
