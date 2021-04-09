import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LyricsPlayerComponent } from './lyrics-player/lyrics-player.component'
import { SongIndexComponent } from './song-index/song-index.component'
const routes: Routes = [
  { path: '', component: SongIndexComponent },
  { path: 'player', component: LyricsPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
