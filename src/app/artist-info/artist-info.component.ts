import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css']
})
export class ArtistInfoComponent implements AfterViewInit {

  @Input() songArgs: Song;
  @Input() currentTime: number = 0;
  constructor() { }

  ngAfterViewInit(): void {
  }

}

export interface Song {
  names: string[];
  singers: string[];
  thumb?: string;
  title: string;
}