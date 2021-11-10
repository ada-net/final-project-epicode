import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProvincesMunicipalitiesComponent } from './list-provinces-municipalities.component';

describe('ListProvincesMunicipalitiesComponent', () => {
  let component: ListProvincesMunicipalitiesComponent;
  let fixture: ComponentFixture<ListProvincesMunicipalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProvincesMunicipalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProvincesMunicipalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
