import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Avions } from './avions';

describe('Avions', () => {
  let component: Avions;
  let fixture: ComponentFixture<Avions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avions],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Avions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
