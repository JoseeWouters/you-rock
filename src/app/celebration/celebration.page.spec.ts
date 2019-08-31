import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrationPage } from './celebration.page';

describe('CelebrationPage', () => {
  let component: CelebrationPage;
  let fixture: ComponentFixture<CelebrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
