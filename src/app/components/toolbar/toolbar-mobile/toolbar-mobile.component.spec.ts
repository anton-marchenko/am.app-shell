import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMobileComponent } from './toolbar-mobile.component';

describe('ToolbarMobileComponent', () => {
  let component: ToolbarMobileComponent;
  let fixture: ComponentFixture<ToolbarMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToolbarMobileComponent]
    });
    fixture = TestBed.createComponent(ToolbarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
