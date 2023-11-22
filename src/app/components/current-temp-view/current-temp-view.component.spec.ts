import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTempViewComponent } from './current-temp-view.component';

describe('CurrentTempViewComponent', () => {
  let component: CurrentTempViewComponent;
  let fixture: ComponentFixture<CurrentTempViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentTempViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentTempViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
