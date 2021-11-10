import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProvinceMunicipalityComponent } from './new-province-municipality.component';

describe('NewProvinceMunicipalityComponent', () => {
  let component: NewProvinceMunicipalityComponent;
  let fixture: ComponentFixture<NewProvinceMunicipalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProvinceMunicipalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProvinceMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
