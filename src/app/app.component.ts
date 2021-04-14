import { Component,AfterContentInit,OnDestroy,Input,ViewChild, ElementRef,OnInit } from '@angular/core';
import { SongIndexComponent } from './song-index/song-index.component';
import { SharedServiceService,BarState } from './shared-service.service';
import { delay,dim } from './common-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements AfterContentInit {
  title = 'wle';
  @Input() viewName: string;
  @ViewChild('top_bar',{ read: ElementRef }) _topBar: ElementRef;
  @ViewChild('content') _content: ElementRef;
  @ViewChild('bottom_bar',{ read: ElementRef }) _bottomBar: ElementRef;
  
  topBar: HTMLDivElement;
  content: HTMLDivElement;
  bottomBar: HTMLDivElement;

  sharedService: SharedServiceService;
  constructor(private _sharedService: SharedServiceService) { 
    this.sharedService = _sharedService;
  }

  ngAfterContentInit() {
    this.sharedService.subscribeView((data: any)=>{
      setTimeout(()=>{
        this.viewName = data;
        this.afterContentInit();
      });
    });
    //this.sharedService.subject.subscribe()
  }

  private showBars () {
    this.sharedService.setBarState({
      hidden: false,
      bottom_height: dim(this.bottomBar).height
    });
    this.topBar.classList.remove("hide_bars");
    this.bottomBar.classList.remove("hide_bars_bottom");
  }

  private hideBars() {
    this.sharedService.setBarState({
      hidden: true,
      bottom_height: dim(this.bottomBar).height
    });
    this.topBar.classList.add("hide_bars");
    this.bottomBar.classList.add("hide_bars_bottom");
  }
  onMoveRef: any;
  async afterContentInit () {
    this.topBar = this._topBar.nativeElement.firstChild;
    this.bottomBar = this._bottomBar.nativeElement.firstChild;
    this.content = this._content.nativeElement;

    if(this.viewName == "LyricsPlayerComponent"){
      //console.log(this.content);
      this.topBar.classList.remove("position_sticky");
      this.topBar.classList.add("position_absolute");
      await delay(500);
      this.topBar.classList.add("hide_bars");
      this.bottomBar.classList.add("hide_bars_bottom");
      this.onMoveRef = this.onMouseMove.bind(this);
      window.addEventListener('mousemove',this.onMoveRef);
      //this.content.style.height = "100vh";
    } else {
      clearTimeout(this.t1);
      console.log("else");
      window.removeEventListener('mousemove',this.onMoveRef);
      this.topBar.classList.remove("position_absolute");
      this.topBar.classList.add("position_sticky");
      
      this.showBars();
    }
  }
  
  t1:any;
  state_t1: boolean = false;
  onMouseMove() {
    //console.log("moving");
    if(this.state_t1) clearTimeout(this.t1);
        if(!this.state_t1) {
          this.showBars();
          this.state_t1 = true;
        }
        if(this.state_t1){
          this.t1 = setTimeout(()=>{
          this.hideBars();
          this.state_t1 = false;
        },2000);
        }
  }
}
