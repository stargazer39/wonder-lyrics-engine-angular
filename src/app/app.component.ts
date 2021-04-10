import { Component,AfterContentInit,OnDestroy,Input } from '@angular/core';
import { SongIndexComponent } from './song-index/song-index.component';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements AfterContentInit {
  title = 'wle';
  @Input() viewName: string;
  sharedService: SharedServiceService;
  constructor(private _sharedService: SharedServiceService) { 
    this.sharedService = _sharedService;
  }

  ngAfterContentInit() {
    this.sharedService.subject.subscribe((data)=>{
      console.log(data);
      setTimeout(()=>{
        this.viewName = data;
      })
    })
  }
}
