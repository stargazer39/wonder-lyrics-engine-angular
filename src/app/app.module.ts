import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LyricsPlayerComponent } from './lyrics-player/lyrics-player.component';
import { SongIndexComponent } from './song-index/song-index.component';

@NgModule({
  declarations: [
    AppComponent,
    LyricsPlayerComponent,
    SongIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
