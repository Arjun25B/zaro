import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Skip to main content -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0070F3] focus:text-white focus:rounded-md focus:shadow-lg"
    >
      Skip to main content
    </a>

    <!-- Sticky Navigation Header -->
    <header
      [class]="
        isScrolled()
          ? 'fixed top-0 left-0 right-0 z-50 h-[72px] bg-[#071838]/95 backdrop-blur-md border-b border-[#1E3765]/60 shadow-lg shadow-black/20 transition-all duration-300'
          : 'fixed top-0 left-0 right-0 z-50 h-[72px] bg-transparent border-b border-white/5 transition-all duration-300'
      "
    >
      <div class="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <!-- Dual Brand Logo Lockup -->
        <a routerLink="/" class="flex items-center gap-3 sm:gap-4 group" aria-label="Corezan & ZARO Enterprise Platform">
          <img
            src="/corezan-logo.png"
            alt="Corezan AI"
            class="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div class="h-6 w-[1px] bg-white/20 sm:h-7" aria-hidden="true"></div>
          <img
            src="/zaro-logo.png"
            alt="ZARO Cloud"
            class="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-6 lg:space-x-7" aria-label="Main Navigation">
          @for (link of navLinks; track link.name) {
            @if (link.isRoute) {
              <a
                [routerLink]="link.href"
                routerLinkActive="text-[#00D2FF]"
                class="text-sm font-medium text-slate-300 hover:text-[#00D2FF] transition-colors duration-150 relative py-1 group"
              >
                {{ link.name }}
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00D2FF] transition-all duration-200 group-hover:w-full"></span>
              </a>
            } @else {
              <a
                [href]="link.href"
                class="text-sm font-medium text-slate-300 hover:text-[#00D2FF] transition-colors duration-150 relative py-1 group"
              >
                {{ link.name }}
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00D2FF] transition-all duration-200 group-hover:w-full"></span>
              </a>
            }
          }
        </nav>

        <!-- Right Action Zone -->
        <div class="flex items-center gap-3">
          <a
            href="/#contact"
            class="hidden sm:inline-flex items-center gap-1.5 h-11 px-6 rounded-full bg-[#0070F3] hover:bg-[#005BD0] text-white text-xs font-semibold shadow-md shadow-[#0070F3]/25 transition-all duration-200"
          >
            <span>Book Demo</span>
            <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <!-- Mobile Hamburger Menu Button -->
          <button
            type="button"
            (click)="toggleMobileNav()"
            class="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
            aria-label="Open mobile navigation"
          >
            <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    @if (mobileNavOpen()) {
      <div class="fixed inset-0 z-[100] md:hidden">
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
          (click)="closeMobileNav()"
          aria-hidden="true"
        ></div>

        <!-- Drawer panel -->
        <div
          class="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#071838] border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div>
            <div class="flex items-center justify-between pb-6 border-b border-white/10">
              <div class="flex items-center gap-2">
                <img src="/corezan-logo.png" alt="Corezan" class="h-7 w-auto object-contain" />
                <div class="h-5 w-[1px] bg-white/20"></div>
                <img src="/zaro-logo.png" alt="ZARO" class="h-6 w-auto object-contain" />
              </div>
              <button
                (click)="closeMobileNav()"
                class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav class="flex flex-col space-y-2 mt-6">
              @for (link of navLinks; track link.name) {
                @if (link.isRoute) {
                  <a
                    [routerLink]="link.href"
                    (click)="closeMobileNav()"
                    class="px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>{{ link.name }}</span>
                    <svg class="w-4 h-4 text-slate-400 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                } @else {
                  <a
                    [href]="link.href"
                    (click)="closeMobileNav()"
                    class="px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>{{ link.name }}</span>
                    <svg class="w-4 h-4 text-slate-400 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                }
              }
            </nav>
          </div>

          <div class="pt-6 border-t border-white/10 space-y-4">
            <a
              href="/#contact"
              (click)="closeMobileNav()"
              class="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0070F3] to-[#00D2FF] text-white font-semibold text-sm shadow-lg shadow-[#0070F3]/25"
            >
              <span>Schedule Demo</span>
              <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    }
  `,
})
export class HeaderComponent {
  isScrolled = signal(false);
  mobileNavOpen = signal(false);

  navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Corezan AI', href: '/#corezan', isRoute: false },
    { name: 'ZARO Platform', href: '/#zaro', isRoute: false },
    { name: 'Industries', href: '/#industries', isRoute: false },
    { name: 'Why Us', href: '/#why', isRoute: false },
    { name: 'Careers', href: '/careers', isRoute: true },
    { name: 'Contact', href: '/#contact', isRoute: false },
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileNav() {
    this.mobileNavOpen.update((open) => !open);
  }

  closeMobileNav() {
    this.mobileNavOpen.set(false);
  }
}
