import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    it('user id invalid when empty', () => {
      expect(component.loginForm.controls['userId'].valid).toBeFalsy();
    });
    it('password invalid when empty', () => {
      expect(component.loginForm.controls['pwd'].valid).toBeFalsy();
    });
  });


});
