import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AfterSignupFlowComponent } from "./after-signup-flow.component";

describe("ProfileComponent", () => {
  let component: AfterSignupFlowComponent;
  let fixture: ComponentFixture<AfterSignupFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AfterSignupFlowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterSignupFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
