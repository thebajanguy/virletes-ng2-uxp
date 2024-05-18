import { async, ComponentFixture, TestBed } from "@angular/core/testing";
//
import { UserWorkspaceSidebarComponent } from "./user-workspace-sidebar.component";

describe("UserWorkspaceSidebarComponent", () => {
  let component: UserWorkspaceSidebarComponent;
  let fixture: ComponentFixture<UserWorkspaceSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserWorkspaceSidebarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkspaceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
