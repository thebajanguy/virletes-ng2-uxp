import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-privacy-uxp",
  templateUrl: "./privacy.component.html",
  styleUrls: ["./privacy.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PrivacyComponent implements OnInit, OnDestroy {
  data : Date = new Date();

  public showSubscribeForm: string = 'TRUE';
  public showContactForm: string = 'FALSE';

  public showAllPricing: string = 'TRUE';
  public showAthletePricing: string = 'FALSE';
  public showCoachPricing: string = 'FALSE';

  constructor() {}

  ngOnInit() {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-index-page');
  }
  ngOnDestroy() {
      const navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('landing-index-page');
  }
}
