import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDeetsComponent } from './character-deets.component';

describe('CharacterDeetsComponent', () => {
  let component: CharacterDeetsComponent;
  let fixture: ComponentFixture<CharacterDeetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDeetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
