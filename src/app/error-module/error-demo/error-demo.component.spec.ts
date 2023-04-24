import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDemoComponent } from './error-demo.component';

describe('ErrorDemoComponent', () => {
  let component: ErrorDemoComponent;
  let fixture: ComponentFixture<ErrorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
