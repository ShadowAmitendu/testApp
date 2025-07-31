import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpReq } from './http-req';

describe('HttpReq', () => {
  let component: HttpReq;
  let fixture: ComponentFixture<HttpReq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpReq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpReq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
