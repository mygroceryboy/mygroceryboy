import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemComponent } from './store-item.component';

describe('StoreItemComponent', () => {
  let component: StoreItemComponent;
  let fixture: ComponentFixture<StoreItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
