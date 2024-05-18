import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { WhoweareComponent } from "./who-we-are.component";

describe("WhoweareComponent", () => {
  let component: WhoweareComponent;
  let fixture: ComponentFixture<WhoweareComponent>;

  beforeEach( waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WhoweareComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoweareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
