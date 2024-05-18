import { Injectable } from '@angular/core';

import { Component, Input} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({providedIn: 'root'})
export class ModalsService {

  public closeResult?: string;
  private modals: any[] = [];

  constructor(private modalService: NgbModal) {}

  /****************** NEW *************************************/
  add(modal: any) {
      // add modal to array of active modals
      this.modals.push(modal);
  }
  remove(id: string) {
      // remove modal from array of active modals
      this.modals = this.modals.filter(x => x.id !== id);
  }
  open(id: string) {
      // open modal specified by id
      const modal = this.modals.find(x => x.id === id);
      modal.open();
  }
  close(id: string) {
      // close modal specified by id
      const modal = this.modals.find(x => x.id === id);
      modal.close();
  }
  /****************** OLD ***********************************/
  openModal(content: any, type: any) {
    if (type === 'sm') {
        console.log('aici');
        this.modalService.open(content, { size: 'sm' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    } else {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
  }
  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
  }

}


