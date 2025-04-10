import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantanderListaComponent } from './santander-lista.component';

describe('SantanderListaComponent', () => {
  let component: SantanderListaComponent;
  let fixture: ComponentFixture<SantanderListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantanderListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SantanderListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
