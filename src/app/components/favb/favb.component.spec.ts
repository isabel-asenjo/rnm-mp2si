import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavbComponent } from './favb.component';

describe('FavbComponent', () => {
  let component: FavbComponent;
  let fixture: ComponentFixture<FavbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
