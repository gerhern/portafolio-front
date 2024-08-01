import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProjectComponent } from './small-project.component';

describe('SmallProjectComponent', () => {
  let component: SmallProjectComponent;
  let fixture: ComponentFixture<SmallProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
