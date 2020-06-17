import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbookinguserComponent } from './showbookinguser.component';

describe('ShowbookinguserComponent', () => {
  let component: ShowbookinguserComponent;
  let fixture: ComponentFixture<ShowbookinguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbookinguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbookinguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
