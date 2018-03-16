import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoinexComponent } from './koinex.component';

describe('KoinexComponent', () => {
  let component: KoinexComponent;
  let fixture: ComponentFixture<KoinexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoinexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoinexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
