import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingExamplePage } from './loading-example.page';

describe('LoadingExamplePage', () => {
  let component: LoadingExamplePage;
  let fixture: ComponentFixture<LoadingExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
