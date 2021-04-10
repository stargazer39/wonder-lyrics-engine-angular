import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { SharedServiceService } from "../shared-service.service";
import { PlayerService } from "../player.service";
import { UniPlayerComponent,PlayerMode, PlayerState } from "../uni-player/uni-player.component";
import { songs } from '../../songs';

@Component({
  selector: 'app-lyrics-player',
  templateUrl: './lyrics-player.component.html',
  styleUrls: ['./lyrics-player.component.css']
})
export class LyricsPlayerComponent implements OnInit,AfterViewInit {
  sharedService: SharedServiceService;
  playerService: PlayerService;

  @Input() lyrics: string[] = songs[0].lyrics;
  @ViewChild('container') container: ElementRef;
  @ViewChild('uniPlayer0') player: UniPlayerComponent;
  pEnum = PlayerMode;
  //@ViewChild('local_player') private _local_player: ElementRef;
  
  constructor(_sharedService: SharedServiceService, _playerService: PlayerService){
    this.sharedService = _sharedService;
    this.playerService = _playerService;
  }

  //local_player: HTMLVideoElement;
  ngOnInit() {
    this.sharedService.subject.next("Lyrics Player");
  }
  ngAfterViewInit() {
    console.log(this.container.nativeElement);
    //this.local_player  = this._local_player.nativeElement;
  }

  onPlayerReady(): void {
    console.log("player ready");
  }

  onPlayerStateChange(e: PlayerState): void {
    console.log(PlayerState[e]);
  }
}
