import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpdemoComponent } from './httpdemo.component';

describe('HttpdemoComponent', () => {
  let component: HttpdemoComponent;
  let fixture: ComponentFixture<HttpdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
