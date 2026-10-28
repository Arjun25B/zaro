import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the Corezan landing page', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('AI-Powered');
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-modules-grid')).toBeTruthy();
  });

  it('should render the connected ZARO hero graphic', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.orbit-center img')?.getAttribute('src')).toBe('/zaro-logo.png');
    expect(compiled.querySelectorAll('.orbit-node')).toHaveLength(4);
    expect(compiled.querySelectorAll('.network-connectors line')).toHaveLength(4);
  });
});
