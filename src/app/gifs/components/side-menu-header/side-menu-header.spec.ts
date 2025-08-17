import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuHeader } from './side-menu-header';

describe('SideMenuHeader', () => {
  let component: SideMenuHeader;
  let fixture: ComponentFixture<SideMenuHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
