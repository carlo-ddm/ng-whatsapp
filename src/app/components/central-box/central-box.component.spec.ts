import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralBoxComponent } from './central-box.component';

describe('CentralBoxComponent', () => {
  let component: CentralBoxComponent;
  let fixture: ComponentFixture<CentralBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
