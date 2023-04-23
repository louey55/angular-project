import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceLouerComponent } from './annonce-louer.component';

describe('AnnonceLouerComponent', () => {
  let component: AnnonceLouerComponent;
  let fixture: ComponentFixture<AnnonceLouerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceLouerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceLouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
