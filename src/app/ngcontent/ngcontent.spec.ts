import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngcontent } from './ngcontent';

describe('Ngcontent', () => {
  let component: Ngcontent;
  let fixture: ComponentFixture<Ngcontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngcontent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngcontent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
