import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuOptions } from './side-menu-options';

describe('SideMenuOptions', () => {
  let component: SideMenuOptions;
  let fixture: ComponentFixture<SideMenuOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
