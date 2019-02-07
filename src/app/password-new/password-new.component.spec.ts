import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordNewComponent } from './password-new.component';

describe('PasswordNewComponent', () => {
  let component: PasswordNewComponent;
  let fixture: ComponentFixture<PasswordNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
