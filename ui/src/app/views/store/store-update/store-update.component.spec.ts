import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreUpdateComponent } from './store-update.component';

describe('StoreUpdateComponent', () => {
  let component: StoreUpdateComponent;
  let fixture: ComponentFixture<StoreUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
