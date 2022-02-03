import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavoritesComponent } from './add-to-favorites.component';

describe('AddToFavoritesComponent', () => {
  let component: AddToFavoritesComponent;
  let fixture: ComponentFixture<AddToFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
