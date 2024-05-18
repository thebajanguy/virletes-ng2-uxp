import { Component, Input } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-base-modal',
    template: ''
})
export class BaseModalComponent {
  closeResult: string | undefined;

  constructor(public modalService: NgbModal) {}

  open(content: any, type: string, modalDimension: string | undefined) {
    if (modalDimension === "sm" && type === "modal_mini") {
      this.modalService
        .open(content, { windowClass: "modal-mini modal-primary", size: "sm" })
        .result.then(
          result => {
            this.closeResult = `Closed with: ${result}`;
          },
          reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    } else if (modalDimension == undefined && type === "Login") {
      this.modalService
        .open(content, { windowClass: "modal-login modal-primary" })
        .result.then(
          result => {
            this.closeResult = `Closed with: ${result}`;
          },
          reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    } else {
      this.modalService.open(content,  { windowClass : "myCustomModalClass modal-primary", size: "xl"})
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
