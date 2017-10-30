import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularNotifyComponent } from './regular-notify.component';

describe('RegularNotifyComponent', () => {
  let component: RegularNotifyComponent;
  let fixture: ComponentFixture<RegularNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
