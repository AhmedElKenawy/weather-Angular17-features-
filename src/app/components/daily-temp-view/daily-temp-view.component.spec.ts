import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTempViewComponent } from './daily-temp-view.component';

describe('DailyTempViewComponent', () => {
  let component: DailyTempViewComponent;
  let fixture: ComponentFixture<DailyTempViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTempViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyTempViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
