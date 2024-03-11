import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjmnDetailComponent } from './ajmn-detail.component';

describe('AjmnDetailComponent', () => {
  let component: AjmnDetailComponent;
  let fixture: ComponentFixture<AjmnDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjmnDetailComponent]
    });
    fixture = TestBed.createComponent(AjmnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
