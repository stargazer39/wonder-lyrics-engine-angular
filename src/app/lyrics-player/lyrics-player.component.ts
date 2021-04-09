import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from "../shared-service.service";
@Component({
  selector: 'app-lyrics-player',
  templateUrl: './lyrics-player.component.html',
  styleUrls: ['./lyrics-player.component.css']
})
export class LyricsPlayerComponent implements OnInit {
  sharedService: SharedServiceService;

  constructor(_sharedService: SharedServiceService){
    this.sharedService = _sharedService;
  }

  ngOnInit() {
    this.sharedService.subject.next("Song Player");
  }
}
