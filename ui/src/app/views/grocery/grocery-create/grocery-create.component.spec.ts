import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryCreateComponent } from './grocery-create.component';

describe('GroceryCreateComponent', () => {
  let component: GroceryCreateComponent;
  let fixture: ComponentFixture<GroceryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
