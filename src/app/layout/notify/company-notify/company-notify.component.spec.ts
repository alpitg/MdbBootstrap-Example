import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNotifyComponent } from './company-notify.component';

describe('CompanyNotifyComponent', () => {
  let component: CompanyNotifyComponent;
  let fixture: ComponentFixture<CompanyNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
