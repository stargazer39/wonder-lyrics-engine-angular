import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryViewComponent } from './secondary-view.component';

describe('SecondaryViewComponent', () => {
  let component: SecondaryViewComponent;
  let fixture: ComponentFixture<SecondaryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
