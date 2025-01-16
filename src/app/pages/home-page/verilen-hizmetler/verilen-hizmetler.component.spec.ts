import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerilenHizmetlerComponent } from './verilen-hizmetler.component';

describe('VerilenHizmetlerComponent', () => {
  let component: VerilenHizmetlerComponent;
  let fixture: ComponentFixture<VerilenHizmetlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerilenHizmetlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerilenHizmetlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
