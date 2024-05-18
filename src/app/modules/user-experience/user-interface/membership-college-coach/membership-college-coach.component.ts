import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewEncapsulation, Injector } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-membership-college-coach.component-uxp",
  templateUrl: "./membership-college-coach.component.html",
  styleUrls: ["./membership-college-coach.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CollegeCoachComponent implements OnInit, OnDestroy {

  needsLogin: boolean = false;
  _userName: string = '';

  public showSubscribeForm = 'true';
  public showContactForm = 'false';

  public showAllPricing = 'true';
  public showAthletePricing = 'false';
  public showCoachPricing = 'false';

  constructor(injector: Injector, private route: ActivatedRoute) {
  }
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
