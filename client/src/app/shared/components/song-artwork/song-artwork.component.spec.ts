import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongArtworkComponent } from './song-artwork.component';

describe('SongArtworkComponent', () => {
  let component: SongArtworkComponent;
  let fixture: ComponentFixture<SongArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
