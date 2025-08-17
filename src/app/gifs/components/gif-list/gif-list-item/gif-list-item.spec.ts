import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifListItem } from './gif-list-item';

describe('GifListItem', () => {
  let component: GifListItem;
  let fixture: ComponentFixture<GifListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
