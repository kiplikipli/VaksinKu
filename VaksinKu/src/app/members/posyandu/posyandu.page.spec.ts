import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosyanduPage } from './posyandu.page';

describe('PosyanduPage', () => {
  let component: PosyanduPage;
  let fixture: ComponentFixture<PosyanduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosyanduPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosyanduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
