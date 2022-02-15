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
import {MatButtonModule} from '@angular/material/button'
import {ScoresService} from "./services/scores.service";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule
  ],
  providers: [
    PostService,
    ScoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
