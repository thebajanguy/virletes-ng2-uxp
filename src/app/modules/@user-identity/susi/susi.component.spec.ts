import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { UserSusiComponent } from "./susi.component";

describe("UserSusiComponent", () => {
  let component: UserSusiComponent;
  let fixture: ComponentFixture<UserSusiComponent>;

  beforeEach( waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserSusiComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
