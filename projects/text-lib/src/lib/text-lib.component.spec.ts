import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLibComponent } from './text-lib.component';

describe('TextLibComponent', () => {
  let component: TextLibComponent;
  let fixture: ComponentFixture<TextLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
