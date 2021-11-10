import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProvinceMunicipalityComponent } from './edit-province-municipality.component';

describe('EditProvinceMunicipalityComponent', () => {
  let component: EditProvinceMunicipalityComponent;
  let fixture: ComponentFixture<EditProvinceMunicipalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProvinceMunicipalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProvinceMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
