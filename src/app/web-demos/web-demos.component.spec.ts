import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDemosComponent } from './web-demos.component';

describe('WebDemosComponent', () => {
  let component: WebDemosComponent;
  let fixture: ComponentFixture<WebDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
