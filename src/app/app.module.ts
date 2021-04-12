import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LyricsPlayerComponent } from './lyrics-player/lyrics-player.component';
import { SongIndexComponent } from './song-index/song-index.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { SongElementComponent } from './song-element/song-element.component';
import { UniPlayerComponent } from './uni-player/uni-player.component';
import { DefaultLyricsViewComponent } from './default-lyrics-view/default-lyrics-view.component';
import { ArtistInfoComponent } from './artist-info/artist-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LyricsPlayerComponent,
    SongIndexComponent,
    TopBarComponent,
    BottomBarComponent,
    SongElementComponent,
    UniPlayerComponent,
    DefaultLyricsViewComponent,
    ArtistInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
