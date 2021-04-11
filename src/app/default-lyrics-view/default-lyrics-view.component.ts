import { Component, OnInit, AfterViewInit, Input, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Cutil } from '../common-utils';

@Component({
  selector: 'app-default-lyrics-view',
  templateUrl: './default-lyrics-view.component.html',
  styleUrls: ['./default-lyrics-view.component.css']
})
export class DefaultLyricsViewComponent implements OnInit,AfterViewInit {
  @Input() lyrics:string[];
  isReady: boolean = false;
  indexNow: number = 0;
  @ViewChildren('lyric') lyricElems: QueryList<ElementRef>;
  @ViewChild('container') container: ElementRef;
  @ViewChild('highlighter') highlighter: ElementRef;
  @Input() 
  set goToIndex(idx: number) {
    if(this.isReady) {
      let i = 0;
      let totHeight = 0;
      let thisHeight = 0;
      for(const elem of this.lyricElems) {
        thisHeight = Cutil.dim(elem).height;
        if(i == idx) {
          this.indexNow = idx;
          break;
        }
        totHeight += thisHeight;
        i++;
      }
      console.log(Cutil.dim(this.container).height);
      this.container.nativeElement.style.top = (Cutil.dim(this.container).height / 2 - totHeight) + "px";
      this.highlighter.nativeElement.style.height =  thisHeight + "px";
    }else {
      this.indexNow = idx;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isReady = true;
    this.goToIndex = this.indexNow;
    this.highlighter.nativeElement.style.top = Cutil.dim(this.container).height / 2 + "px";
    window.onresize = ()=>{
      //console.log(Cutil.dim(this.container).height);
      this.isReady = false;
      this.highlighter.nativeElement.style.top = Cutil.dim(this.container).height / 2 + "px";
      this.isReady = true;
      this.goToIndex = this.indexNow;
    }
  }
}
