import { AfterViewInit, Component,OnInit, QueryList, ViewChildren } from '@angular/core';
import { songs } from '../../songs';
import { CommonUtils } from "../common-utils";
import { SharedServiceService } from '../shared-service.service';
import { SongElementComponent } from '../song-element/song-element.component';

@Component({
  selector: 'app-song-index',
  templateUrl: './song-index.component.html',
  styleUrls: ['./song-index.component.css'],
  providers: []
})
export class SongIndexComponent implements OnInit,AfterViewInit {
  songs = songs;
  sharedService: SharedServiceService;
  @ViewChildren(SongElementComponent) songElems: QueryList<SongElementComponent>;
  constructor(_sharedService: SharedServiceService){
    this.sharedService = _sharedService;
  }

  ngOnInit() {
    this.sharedService.subject.next("Song Index");
  }

  async ngAfterViewInit() {
    for(var elem of this.songElems){
      elem.parentElem.nativeElement.style.transform = "translate(0,0)";
      elem.parentElem.nativeElement.style.opacity = "1";
      await CommonUtils.delay(200);
    }
  }
}
