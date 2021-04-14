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
  @Input() 
  set hideElem(state: boolean) {
    if(state) {
      this.thisWindow.style.opacity = '0';
      this.thisWindow.classList.add('width-0');
      this.stopUpdate();
    }else{
      this.thisWindow.style.opacity = '1';
      this.thisWindow.classList.remove('width-0');
      this.startUpdate();
    }
  }
  @ViewChild('thiswindow') _thisWindow: ElementRef;
  @ViewChild('thisthumb') _thisThumb: ElementRef;
  @ViewChild('thiscanvas') _thisCanvas: ElementRef;

  sharedSrv: SharedServiceService;
  thisWindow: HTMLDivElement;
  thisThumb: HTMLDivElement;
  thisCanvas: HTMLCanvasElement;
  updateBlocker: boolean = false;
  updateTimer: any;
  cArgs: canvasArgs;

  constructor(_sharedService: SharedServiceService) { 
    this.sharedSrv = _sharedService;
  }

  private startUpdate() { 
    this.updateTimer = setInterval(this.updatePreview.bind(this),20);
  }
  
  private stopUpdate() {
    clearInterval(this.updateTimer);
  }

  private updatePreview() {
    if(!this.updateBlocker) {
      this.cArgs.context.drawImage(this.cArgs.elem,0,0,this.cArgs.width,this.cArgs.height);
      //setTimeout(this.updatePreview.bind(this),20,video,context,w,h);
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

      this.cArgs = {
        elem:elem,
        context:ctx,
        width:cw,
        height:ch
      }
      this.startUpdate();
      //this.updatePreview(elem,ctx,cw,ch);
      console.log(this.thisCanvas);
    })
  }

  ngOnDestroy() {
    this.stopUpdate();
  }

}

interface canvasArgs {
  elem: any,
  width: number,
  height: number,
  context: any
}