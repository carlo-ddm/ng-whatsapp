import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPartCentralBoxComponent } from './right-part-central-box.component';

describe('RightPartCentralBoxComponent', () => {
  let component: RightPartCentralBoxComponent;
  let fixture: ComponentFixture<RightPartCentralBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightPartCentralBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightPartCentralBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
