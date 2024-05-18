import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-experience-footer-cmp",
  templateUrl: "./user-experience-footer.component.html",
  styleUrls: ["./user-experience-footer.component.scss"]
})
export class UserExperienceFooterComponent implements OnInit {
  data: Date = new Date();
  test: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
