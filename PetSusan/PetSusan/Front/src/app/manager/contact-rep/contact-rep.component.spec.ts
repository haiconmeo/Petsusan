import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRepComponent } from './contact-rep.component';

describe('ContactRepComponent', () => {
  let component: ContactRepComponent;
  let fixture: ComponentFixture<ContactRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
