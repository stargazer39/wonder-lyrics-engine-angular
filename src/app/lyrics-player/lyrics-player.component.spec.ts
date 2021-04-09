import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsPlayerComponent } from './lyrics-player.component';

describe('LyricsPlayerComponent', () => {
  let component: LyricsPlayerComponent;
  let fixture: ComponentFixture<LyricsPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricsPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
