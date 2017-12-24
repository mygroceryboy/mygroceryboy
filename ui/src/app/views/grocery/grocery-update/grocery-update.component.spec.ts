import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryUpdateComponent } from './grocery-update.component';

describe('GroceryUpdateComponent', () => {
  let component: GroceryUpdateComponent;
  let fixture: ComponentFixture<GroceryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
