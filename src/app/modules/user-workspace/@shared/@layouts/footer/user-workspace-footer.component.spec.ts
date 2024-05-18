import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserWorkspaceFooterComponent } from "./user-workspace-footer.component";

describe("UserWorkspaceFooterComponent", () => {
  let component: UserWorkspaceFooterComponent;
  let fixture: ComponentFixture<UserWorkspaceFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserWorkspaceFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkspaceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
