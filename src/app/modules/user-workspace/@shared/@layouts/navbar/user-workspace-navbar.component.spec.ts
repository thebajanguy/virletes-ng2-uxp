import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserWorkspaceNavbarComponent } from "./user-workspace-navbar.component";

describe("NavbarComponent", () => {
  let component: UserWorkspaceNavbarComponent;
  let fixture: ComponentFixture<UserWorkspaceNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserWorkspaceNavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkspaceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
