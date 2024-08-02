import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectPageComponent } from './proyect-page.component';

describe('ProyectPageComponent', () => {
  let component: ProyectPageComponent;
  let fixture: ComponentFixture<ProyectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
