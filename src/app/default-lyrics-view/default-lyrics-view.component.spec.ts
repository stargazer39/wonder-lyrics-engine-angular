import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLyricsViewComponent } from './default-lyrics-view.component';

describe('DefaultLyricsViewComponent', () => {
  let component: DefaultLyricsViewComponent;
  let fixture: ComponentFixture<DefaultLyricsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLyricsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLyricsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
