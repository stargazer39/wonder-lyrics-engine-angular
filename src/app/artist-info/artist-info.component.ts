import { Component, AfterViewInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { SharedServiceService,BarState } from '../shared-service.service';
import { dim } from '../common-utils';
import { Song } from '../shared-service.service';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css']
})
export class ArtistInfoComponent implements AfterViewInit,OnDestroy {

  @Input() song: Song;
  @Input() currentTime: number = 0;
  @Input() canvasVideo: boolean = true;
  @Input() thumb: string;
  @ViewChild('thiswindow') _thisWindow: ElementRef;
  @ViewChild('thisthumb') _thisThumb: ElementRef;
  @ViewChild('thiscanvas') _thisCanvas: ElementRef;

  sharedSrv: SharedServiceService;
  thisWindow: HTMLDivElement;
  thisThumb: HTMLDivElement;
  thisCanvas: HTMLCanvasElement;
  updateBlocker: boolean = false;
  updateTimeout: any;

  constructor(_sharedService: SharedServiceService) { 
    this.sharedSrv = _sharedService;
  }

  private updatePreview(video: HTMLVideoElement, context: any, w: number, h:number) {
    if(!this.updateBlocker) {
      context.drawImage(video,0,0,w,h);
      setTimeout(this.updatePreview.bind(this),20,video,context,w,h);
    }
  }

  ngAfterViewInit(): void {
    this.thisWindow = this._thisWindow.nativeElement;
    this.thisThumb = this._thisThumb.nativeElement;
    this.thisCanvas = this._thisCanvas.nativeElement;

    this.sharedSrv.subscribePreview((elem: HTMLVideoElement)=>{
      var ctx = this.thisCanvas.getContext('2d');
      var cw = Math.floor(dim(this.thisWindow).width);
      var ch = Math.floor(cw * 9 / 16);
      this.thisCanvas.width = cw;
      this.thisCanvas.height = ch;
      this.updateBlocker = false;

      this.updatePreview(elem,ctx,cw,ch);
      console.log(this.thisCanvas);
    })
    this.sharedSrv.subscribeBarState((state: BarState)=>{
      //console.log(state);
      //console.log(this.thisWindow);
      if(state.hidden){
        this.thisWindow.style.bottom = 0 + 'px';
      }else{
        this.thisWindow.style.bottom = state.bottom_height + 'px';
      }
    })
  }

  ngOnDestroy() {
    this.updateBlocker = true;
  }

}