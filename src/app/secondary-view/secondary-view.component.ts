import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-secondary-view',
  templateUrl: './secondary-view.component.html',
  styleUrls: ['./secondary-view.component.css']
})
export class SecondaryViewComponent implements OnInit {
  @Input() lyrics:string[];
  @Input() goToIndex: number;
  constructor() { }

  ngOnInit(): void {
  }

}
