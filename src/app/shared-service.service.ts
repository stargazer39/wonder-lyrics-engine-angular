import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  private setViewEvent = new Subject<any>();
  private barState = new Subject<BarState>();
  private previewVideo = new Subject<HTMLVideoElement>();

  currentSong: number;

  public setBarState(state: BarState) {
    this.barState.next(state);
  }

  public subscribeBarState (callback: any) {
    this.barState.subscribe(callback);
  }

  public setViewName(name: string): void {
    this.setViewEvent.next(name);
  }

  public subscribeView(callback: any) {
    this.setViewEvent.subscribe(callback);
  } 

  public setPreviewVideo(state: HTMLVideoElement) {
    this.previewVideo.next(state);
  }

  public subscribePreview(callback: any) {
    this.previewVideo.subscribe(callback);
  }

}

export interface BarState {
  top_height? : number;
  top_width? : number;
  bottom_height?: number;
  bottom_width?: number;
  hidden: boolean;
}

export interface Song {
  names?: string[];
  singers?: string[];
  thumb?: string;
  title: string;
  timecode: Array<number>,
  lyrics: string[],
  id: string;
}