import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteroriseComponent } from './enterorise.component';

describe('EnteroriseComponent', () => {
  let component: EnteroriseComponent;
  let fixture: ComponentFixture<EnteroriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnteroriseComponent]
    });
    fixture = TestBed.createComponent(EnteroriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
