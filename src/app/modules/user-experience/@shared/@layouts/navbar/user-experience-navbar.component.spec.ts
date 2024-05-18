import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserExperienceNavbarComponent } from "./user-experience-navbar.component";

describe("UserExperienceNavbarComponent", () => {
  let component: UserExperienceNavbarComponent;
  let fixture: ComponentFixture<UserExperienceNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserExperienceNavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
