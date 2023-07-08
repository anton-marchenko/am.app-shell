import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarDesktopComponent } from './toolbar-desktop.component';

describe('ToolbarDesktopComponent', () => {
  let component: ToolbarDesktopComponent;
  let fixture: ComponentFixture<ToolbarDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToolbarDesktopComponent]
    });
    fixture = TestBed.createComponent(ToolbarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
