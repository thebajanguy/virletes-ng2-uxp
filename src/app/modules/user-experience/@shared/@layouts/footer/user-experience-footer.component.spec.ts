import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserExperienceFooterComponent } from "./user-experience-footer.component";

describe("UserExperienceFooterComponent", () => {
  let component: UserExperienceFooterComponent;
  let fixture: ComponentFixture<UserExperienceFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserExperienceFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
