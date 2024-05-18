import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-workspace-footer-cmp",
  templateUrl: "./user-workspace-footer.component.html",
  styleUrls: ["./user-workspace-footer.component.scss"]
})
export class UserWorkspaceFooterComponent implements OnInit {
  data: Date = new Date();
  test: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
