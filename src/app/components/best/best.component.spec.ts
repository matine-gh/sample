import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BESTComponent } from './best.component';

describe('BESTComponent', () => {
  let component: BESTComponent;
  let fixture: ComponentFixture<BESTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BESTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
