import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-song-element',
  templateUrl: './song-element.component.html',
  styleUrls: ['./song-element.component.css']
})
export class SongElementComponent implements AfterViewInit {
  @Input() song: any;
  @Input() id: string;
  @ViewChild('parentElem') parentElem: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    
    //this.parentElem.nativeElement.style.color = "red";
  }

}
