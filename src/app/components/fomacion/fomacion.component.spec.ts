import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomacionComponent } from './fomacion.component';

describe('FomacionComponent', () => {
  let component: FomacionComponent;
  let fixture: ComponentFixture<FomacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
