import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnakPage } from './data-anak.page';

describe('DataAnakPage', () => {
  let component: DataAnakPage;
  let fixture: ComponentFixture<DataAnakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAnakPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAnakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
