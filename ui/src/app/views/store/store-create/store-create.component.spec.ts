import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCreateComponent } from './store-create.component';

describe('StoreCreateComponent', () => {
  let component: StoreCreateComponent;
  let fixture: ComponentFixture<StoreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
