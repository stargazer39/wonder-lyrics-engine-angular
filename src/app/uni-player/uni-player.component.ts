import { Component, AfterViewInit,OnInit,Input,EventEmitter,Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-uni-player',
  templateUrl: './uni-player.component.html',
  styleUrls: ['./uni-player.component.css']
})

export class UniPlayerComponent implements AfterViewInit,OnInit {
  @Output() ready = new EventEmitter<any>();
  @Output() stateChanged = new EventEmitter<PlayerState>();
  @Output() error = new EventEmitter<string>();
  @Input() playerMode: PlayerMode;
  @Input() source: string;
  @ViewChild('html5_player') local_player: ElementRef = new ElementRef(HTMLVideoElement);

  pEnum = PlayerMode;
  pStateEnum = PlayerState;
  private player: any;

  constructor() { }
  ngOnInit(): void {
    if(this.playerMode == PlayerMode.HTML5) {
      console.log(`Player Mode is ${this.playerMode}`);
    }else if(this.playerMode == PlayerMode.YT) {
      console.log(`Player Mode is ${this.playerMode}`);
      var tag = document.createElement('script');
      tag.src = 'http://www.youtube.com/iframe_api';
      var firstScriptTag: any = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window['onYouTubeIframeAPIReady'] = () => this.initYoutube();
    }
  }

  initYoutube() {
    this.player = new window['YT'].Player('ytplayer',{
      videoId:this.source,
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        controls: 1,
      },
      events: {
        'onReady': this.onYTPlayerReady.bind(this),
        'onStateChange': this.onYTPlayerStateChange.bind(this)
      }
    });
  }
  ngAfterViewInit() {
    //@ViewChild('')
  }
  
  onYTPlayerReady(e: any) {
    this.ready.emit(true);
  }

  onHTMLPlayerReady(e: any) {
    this.ready.emit(true);
    console.log("canplay")
  }

  onYTPlayerStateChange(e: any) {
    switch(e.data) {
      case window['YT'].PlayerState.PLAYING:
        this.stateChanged.emit(PlayerState.PLAYING);
        break;
      case window['YT'].PlayerState.PAUSED:
        this.stateChanged.emit(PlayerState.PAUSED);
        break;
      case window['YT'].PlayerState.ENDED:
        this.stateChanged.emit(PlayerState.ENDED);
        break;
      case window['YT'].PlayerState.BUFFERING:
        this.stateChanged.emit(PlayerState.BUFFERING);
        break;
      case window['YT'].PlayerState.CUED:
        this.stateChanged.emit(PlayerState.CUED);
        break
    }
  }

  onPlayerStateChange(e: PlayerState) {
    this.stateChanged.emit(e);
  }
  
  public getVideoElement() {
    switch(this.playerMode) {
      case PlayerMode.HTML5:
        return this.local_player.nativeElement;
        break;
    }
  }
  public getCurrentTime(): any {
    switch(this.playerMode) {
      case PlayerMode.HTML5:
        return this.local_player.nativeElement.currentTime;
        break;
    }
  }

  public setCurrentTime(t: number): void {
    switch(this.playerMode) {
      case PlayerMode.HTML5:
        this.local_player.nativeElement.currentTime = t;
        break;
    }
  }

  public play() {
    switch(this.playerMode) {
      case PlayerMode.HTML5:
        this.local_player.nativeElement.play();
        break;
    }
  }

  public pause() {
    switch(this.playerMode) {
      case PlayerMode.HTML5:
        this.local_player.nativeElement.pause();
        break;
    }
  }

  public pausedState(): boolean {
    switch(this.playerMode) {
      case PlayerMode.HTML5:
        return this.local_player.nativeElement.paused;
        break;
    }
    return false;
  }

  public getDuration(): any {
    switch(this.playerMode) {
      case PlayerMode.HTML5:
        return this.local_player.nativeElement.duration;
        break;
    }
  }
}

export enum PlayerMode {
  YT,
  HTML5
}

export enum PlayerState {
  PLAYING,
  PAUSED,
  ENDED,
  BUFFERING,
  CUED
}