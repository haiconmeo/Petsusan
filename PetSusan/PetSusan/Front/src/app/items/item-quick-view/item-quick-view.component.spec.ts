import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemQuickViewComponent } from './item-quick-view.component';

describe('ItemQuickViewComponent', () => {
  let component: ItemQuickViewComponent;
  let fixture: ComponentFixture<ItemQuickViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemQuickViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
