import { Component,OnInit } from '@angular/core';
import { songs } from '../../songs';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-song-index',
  templateUrl: './song-index.component.html',
  styleUrls: ['./song-index.component.css'],
  providers: []
})
export class SongIndexComponent implements OnInit {
  songs = songs;
  sharedService: SharedServiceService;

  constructor(_sharedService: SharedServiceService){
    this.sharedService = _sharedService;
  }

  ngOnInit() {
    this.sharedService.subject.next("Song Index");
  }
}
