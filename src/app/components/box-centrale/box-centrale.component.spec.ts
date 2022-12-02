import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCentraleComponent } from './box-centrale.component';

describe('BoxCentraleComponent', () => {
  let component: BoxCentraleComponent;
  let fixture: ComponentFixture<BoxCentraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCentraleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxCentraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
