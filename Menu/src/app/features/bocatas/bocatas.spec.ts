import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bocatas } from './bocatas';

describe('Bocatas', () => {
  let component: Bocatas;
  let fixture: ComponentFixture<Bocatas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bocatas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bocatas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
