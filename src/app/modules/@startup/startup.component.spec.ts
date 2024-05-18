import { TestBed } from '@angular/core/testing';
import { StartupComponent } from './startup.component';

describe('StartupComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StartupComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StartupComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'virletes-ng2-uxp'`, () => {
    const fixture = TestBed.createComponent(StartupComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('virletes-ng2-uxp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StartupComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('virletes-ng2-uxp app is running!');
  });
});
