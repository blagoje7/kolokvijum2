import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiguranikComponent } from './osiguranik.component';

describe('OsiguranikComponent', () => {
  let component: OsiguranikComponent;
  let fixture: ComponentFixture<OsiguranikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsiguranikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsiguranikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
