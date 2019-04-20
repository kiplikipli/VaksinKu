import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmumPage } from './umum.page';

describe('UmumPage', () => {
  let component: UmumPage;
  let fixture: ComponentFixture<UmumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
