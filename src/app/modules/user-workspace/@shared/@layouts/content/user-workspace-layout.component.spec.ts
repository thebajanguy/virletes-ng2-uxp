import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserWorkspaceLayoutComponent } from "./user-workspace-layout.component";

describe("UserWorkspaceLayoutComponent", () => {
  let component: UserWorkspaceLayoutComponent;
  let fixture: ComponentFixture<UserWorkspaceLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserWorkspaceLayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkspaceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
