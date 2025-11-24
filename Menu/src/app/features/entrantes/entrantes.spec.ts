import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entrantes } from './entrantes';

describe('Entrantes', () => {
  let component: Entrantes;
  let fixture: ComponentFixture<Entrantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entrantes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entrantes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
