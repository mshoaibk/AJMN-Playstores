import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaComponent } from './beta.component';

describe('BetaComponent', () => {
  let component: BetaComponent;
  let fixture: ComponentFixture<BetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetaComponent]
    });
    fixture = TestBed.createComponent(BetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
