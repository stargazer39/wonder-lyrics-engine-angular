import { Component,AfterContentInit,OnDestroy,Input,ViewChild, ElementRef,OnInit } from '@angular/core';
import { SongIndexComponent } from './song-index/song-index.component';
import { SharedServiceService } from './shared-service.service';
import { CommonUtils } from './common-utils';

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
    this.sharedService.subject.subscribe((data)=>{
      setTimeout(()=>{
        this.viewName = data;
        this.afterContentInit();
      })
    })
  }

  async afterContentInit () {
    this.topBar = this._topBar.nativeElement.firstChild;
    this.bottomBar = this._bottomBar.nativeElement.firstChild;
    this.content = this._content.nativeElement;

    if(this.viewName == "LyricsPlayerComponent"){
      //console.log(this.content);
      this.topBar.classList.remove("position_sticky");
      this.topBar.classList.add("position_absolute");
      await CommonUtils.delay(500);
      this.topBar.classList.add("hide_bars");
      this.bottomBar.classList.add("hide_bars_bottom");

      var t1:any;
      var state_t1 = false;
      window.onmousemove = ()=>{
        if(state_t1) clearTimeout(t1);
        if(!state_t1) {
          this.topBar.classList.remove("hide_bars");
          this.bottomBar.classList.remove("hide_bars_bottom");
          state_t1 = true;
        }
        if(state_t1){
          t1 = setTimeout(()=>{
            this.topBar.classList.add("hide_bars");
            this.bottomBar.classList.add("hide_bars_bottom");
            state_t1 = false;
        },2000);
        }
        
      }
      //this.content.style.height = "100vh";
    } else {
      this.topBar.classList.remove("position_absolute");
      this.topBar.classList.add("position_sticky");
      this.topBar.classList.remove("hide_bars");
      this.bottomBar.classList.remove("hide_bars_bottom");
    }
  }
}
