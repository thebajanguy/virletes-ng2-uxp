import { Component, OnInit } from "@angular/core";
import { BaseModalComponent } from "../../@core/modal/modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent extends BaseModalComponent implements OnInit {

  bodyText = 'This text can be updated in modal 1';

  constructor(public override modalService: NgbModal) {
    super(modalService)
  }
  ngOnInit() {}
}
