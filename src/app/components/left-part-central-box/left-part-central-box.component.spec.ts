import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPartCentralBoxComponent } from './left-part-central-box.component';

describe('LeftPartCentralBoxComponent', () => {
  let component: LeftPartCentralBoxComponent;
  let fixture: ComponentFixture<LeftPartCentralBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftPartCentralBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftPartCentralBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
