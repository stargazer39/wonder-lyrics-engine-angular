import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniPlayerComponent } from './uni-player.component';

describe('UniPlayerComponent', () => {
  let component: UniPlayerComponent;
  let fixture: ComponentFixture<UniPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
