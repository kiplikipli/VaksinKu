import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAnakPage } from './detail-anak.page';

describe('DetailAnakPage', () => {
  let component: DetailAnakPage;
  let fixture: ComponentFixture<DetailAnakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAnakPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAnakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
