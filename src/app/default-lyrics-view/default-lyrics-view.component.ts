import { Component, OnInit, AfterViewInit, Input, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { dim } from '../common-utils';
import { Styles } from '../../songs'

@Component({
  selector: 'app-default-lyrics-view',
  templateUrl: './default-lyrics-view.component.html',
  styleUrls: ['./default-lyrics-view.component.css']
})
export class DefaultLyricsViewComponent implements OnInit,AfterViewInit {
  @Input() lyrics: string[];
  @Input() styles?: Styles;
  @Input()
  set hide(hideThis: boolean) {
    try {
      this.container.style.opacity = (hideThis) ? "0" :  "1";
      this.ticker.style.opacity = (hideThis) ? "0" :  "1";
    } catch {

    }
  }
  isReady: boolean = false;
  indexNow: number = 0;
  @ViewChildren('lyric') lyricElems: QueryList<ElementRef>;
  @ViewChild('container') _container: ElementRef;
  @ViewChild('ticker') _ticker: ElementRef;

  //lyricElems: HTMLElement;
  container: HTMLDivElement;
  ticker: HTMLElement;

  @Input() 
  set goToIndex(idx: number) {
    if(this.isReady) {
      this.indexNow = idx;
      let maxHeight = dim(this.container).height;
      let totHeight = 0;
      for(var i = 0; i <= idx; i++) {
        totHeight += dim(this.lyricElems.get(i)).height;
      }
      this.container.style.top = maxHeight/2 - totHeight + dim(this.lyricElems.get(idx)).height/2 + 'px';
      this.ticker.style.top = maxHeight/2 - dim(this.lyricElems.get(idx)).height/2 + 'px';
      this.ticker.style.height = dim(this.lyricElems.get(idx)).height + 'px';
    }else {
      this.indexNow = idx;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.container = this._container.nativeElement;
    this.ticker = this._ticker.nativeElement;

    this.isReady = true;
    this.goToIndex = this.indexNow;
    this.ticker.style.top = dim(this.container).height/2 - dim(this.lyricElems.get(this.indexNow)).height/2 + 'px';
    window.onresize = ()=>{
      //console.log(dim(this.container).height); 
      this.goToIndex = this.indexNow;
    }
  }
}
