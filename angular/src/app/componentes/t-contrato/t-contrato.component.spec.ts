import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TContratoComponent } from './t-contrato.component';

describe('TContratoComponent', () => {
  let component: TContratoComponent;
  let fixture: ComponentFixture<TContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
