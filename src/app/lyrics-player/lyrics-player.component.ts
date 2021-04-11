import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { SharedServiceService } from "../shared-service.service";
import { PlayerService } from "../player.service";
import { UniPlayerComponent,PlayerMode, PlayerState } from "../uni-player/uni-player.component";
import { songs } from '../../songs';

@Component({
  selector: 'app-lyrics-player',
  templateUrl: './lyrics-player.component.html',
  styleUrls: ['./lyrics-player.component.css']
})
export class LyricsPlayerComponent implements OnInit,AfterViewInit,OnDestroy {
  sharedService: SharedServiceService;
  playerService: PlayerService;

  @Input() lyrics: string[] = songs[0].lyrics;
  @ViewChild('container') container: ElementRef;
  @ViewChild('uniPlayer0') player: UniPlayerComponent;
  @ViewChild('uniPlayerWrapper',{ read: ElementRef }) _playerWrapper: ElementRef;
  pEnum = PlayerMode;

  //player: HTMLElement;
  playerWrapper: HTMLElement;
  //@ViewChild('local_player') private _local_player: ElementRef;
  
  constructor(_sharedService: SharedServiceService, _playerService: PlayerService){
    this.sharedService = _sharedService;
    this.playerService = _playerService;
  }

  //local_player: HTMLVideoElement;
  ngOnInit() {
    this.sharedService.subject.next("LyricsPlayerComponent");
  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.playerWrapper = this._playerWrapper.nativeElement;
    })
  }

  ngOnDestroy(): void {
    this.playerWrapper.style.opacity = "0";
  }

  onPlayerReady(): void {
    console.log("player ready");
    setTimeout(()=>{
      this.playerWrapper.style.opacity = "1";
    },100);
    setInterval(()=>{
      console.log(this.player.getDuration());
    },1000);
  }

  onPlayerStateChange(e: PlayerState): void {
    console.log(PlayerState[e]);
  }
}
