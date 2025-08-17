import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSideMenu } from './gifs-side-menu';

describe('GifsSideMenu', () => {
  let component: GifsSideMenu;
  let fixture: ComponentFixture<GifsSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsSideMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsSideMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
