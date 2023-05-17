import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsOperatorsComponent } from './rx-js-operators.component';

describe('RxJsOperatorsComponent', () => {
  let component: RxJsOperatorsComponent;
  let fixture: ComponentFixture<RxJsOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJsOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
