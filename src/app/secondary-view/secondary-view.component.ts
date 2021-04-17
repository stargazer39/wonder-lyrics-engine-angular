import { Component, OnInit,Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Styles } from '../../songs'
@Component({
  selector: 'app-secondary-view',
  templateUrl: './secondary-view.component.html',
  styleUrls: ['./secondary-view.component.css']
})
export class SecondaryViewComponent implements OnInit,AfterViewInit {
  view: HTMLDivElement;
  wrapper: HTMLDivElement;
  ready: boolean = false;

  @Input() lyrics: string[];
  @Input() styles?: Styles;
  @ViewChild('view') _view: ElementRef;
  @ViewChild('wrapper') _wrapper: ElementRef;
  @Input() lyrNow: string;
  @Input() 
  set goToIndex(index: number){
    if(this.ready){
      this.wrapper.style.opacity = '0';
      setTimeout(this.setLyric.bind(this),100,index);
    }
  }
  @Input()
  set hideView(state: boolean) {
    if(this.ready){
      if(state) {
      this.view.style.opacity = '0';
      }else{
        this.view.style.opacity = '1';
      }
    }
  }

  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.view = this._view.nativeElement;
    this.wrapper = this._wrapper.nativeElement;

    this.ready = true;
    this.goToIndex = 0;
    this.hideView = true;
  }

  setLyric(index: number) {
    this.lyrNow = this.lyrics[index]
    this.wrapper.style.opacity = '1';
  }
}
