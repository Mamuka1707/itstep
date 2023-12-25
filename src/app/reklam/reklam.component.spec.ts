import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReklamComponent } from './reklam.component';

describe('ReklamComponent', () => {
  let component: ReklamComponent;
  let fixture: ComponentFixture<ReklamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReklamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReklamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
