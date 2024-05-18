import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FixedSocialPluginComponent } from "./fixed-social-plugin.component";

describe("FixedSocialPluginComponent", () => {
  let component: FixedSocialPluginComponent;
  let fixture: ComponentFixture<FixedSocialPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FixedSocialPluginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedSocialPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
