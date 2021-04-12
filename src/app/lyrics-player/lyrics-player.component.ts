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
  testTimer: any;
  timeCode: number[] = [33.5,37.5,41.4,44.4,49.4,52.5,56.3,58.3,60.2,62.1,67.2,80.1,83.9,87.6,95.1,98.9,102.6,106.5,112.2,114.2,118,121.7,124.8,129.3,133.1,136.6,138.2];
  indexNext: number = 0;
  @Input() lyrics: string[] = songs[0].lyrics;
  @Input() setIndex: number = 0;
  @Input() hideView: boolean;
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
    clearInterval(this.testTimer);
    this.stop();
  }
  test:boolean = false;
  onPlayerReady(): void {
    console.log("player ready");
    setTimeout(()=>{
      this.playerWrapper.style.opacity = "1";
      //console.log(this.player);
      // Debug
      if(!this.test) {
        this.player.setCurrentTime(30);
        this.start();
        this.test = true;

        window.onkeypress = (e: KeyboardEvent) => {
          if(e.key == " "){
            if(this.player.pausedState()){
              this.player.play();
            }else{
              this.player.pause();
              console.log(this.player.getCurrentTime());
            }
          }else if(e.key == "z"){
            this.player.setCurrentTime(this.player.getCurrentTime() - 5);
          }else if(e.key == "x") {
            this.player.setCurrentTime(this.player.getCurrentTime() + 5);
          }
        }
      }
      
    },100);
    this.testTimer = setInterval(()=>{
      //console.log(this.player.getCurrentTime());
    },1000);
  }

  onPlayerStateChange(e: PlayerState): void {
    console.log(PlayerState[e]);
  }

  // The engine begines
  engineTimer: any;
  blocker: boolean = false;
  start() {
    this.engineTimer = setInterval(this.eventLoop.bind(this),100);
  }

  stop() {
    clearInterval(this.engineTimer);
  }

  private eventLoop() {
    if(!this.blocker){
      let now = this.player.getCurrentTime();
      if(this.setIndex > 0 && now < this.timeCode[this.setIndex]) {
        this.seek(now);
      }
      if(now >= this.timeCode[this.indexNext]) {
        this.setIndex = this.indexNext;
        if(this.lyrics[this.setIndex].trim()){
          this.hideView = false;
        }else{
          this.hideView = true;
        }
        this.indexNext++;
      }
    }
  }

  seek(time: number) {
    this.blocker = true;
    console.log("seeking");
    for(var i = 0; i < this.lyrics.length; i++) {
      if(time <= this.timeCode[i]){
        this.indexNext = i - 1;
        break;
      }
    }
    this.blocker = false;
  }
}
