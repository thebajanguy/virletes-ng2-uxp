import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-user-account-failed-uxp',
    templateUrl: './failed.component.html',
    styleUrls: ["./failed.component.scss"],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush})
export class FailedComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}
