import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserExperienceLayoutComponent } from "./user-experience-layout.component";

describe("UserExperienceLayoutComponent", () => {
  let component: UserExperienceLayoutComponent;
  let fixture: ComponentFixture<UserExperienceLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserExperienceLayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
