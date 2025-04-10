import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantanderFormComponent } from './santander-form.component';

describe('SantanderFormComponent', () => {
  let component: SantanderFormComponent;
  let fixture: ComponentFixture<SantanderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantanderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SantanderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
