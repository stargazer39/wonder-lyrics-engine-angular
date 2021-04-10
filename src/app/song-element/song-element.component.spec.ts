import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongElementComponent } from './song-element.component';

describe('SongElementComponent', () => {
  let component: SongElementComponent;
  let fixture: ComponentFixture<SongElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
