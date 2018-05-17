import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredominantComponent } from './predominant.component';

describe('PredominantComponent', () => {
  let component: PredominantComponent;
  let fixture: ComponentFixture<PredominantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredominantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredominantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
