import { Component, signal, HostListener, effect, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Skip to main content for accessibility -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[120] focus:px-4 focus:py-2 focus:bg-[#0070F3] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
    >
      Skip to main content
    </a>

    <!-- Sticky Navigation Header -->
    <header
      [class]="
        isSolidNav()
          ? 'fixed top-0 left-0 right-0 z-50 h-[72px] bg-[#071838]/95 backdrop-blur-md border-b border-[#1E3765]/60 shadow-lg shadow-black/20 transition-all duration-300'
          : 'fixed top-0 left-0 right-0 z-50 h-[72px] bg-transparent border-b border-white/5 transition-all duration-300'
      "
    >
      <div class="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <!-- Dual Brand Logo Lockup (Clickable) -->
        <a
          routerLink="/"
          (click)="closeMobileNav()"
          class="flex items-center gap-3 sm:gap-4 transition-opacity hover:opacity-90 cursor-pointer"
          aria-label="Corezan & ZARO Enterprise Platform - Home"
        >
          <img
            src="/corezan-logo.png"
            alt="Corezan AI"
            class="h-9 sm:h-10 w-auto object-contain"
          />
          <div class="h-6 w-[1px] bg-white/20 sm:h-7" aria-hidden="true"></div>
          <img
            src="/zaro-logo.png"
            alt="ZARO Cloud"
            class="h-8 sm:h-9 w-auto object-contain"
          />
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-6 lg:space-x-7" aria-label="Main Navigation">
          @for (link of navLinks; track link.name) {
            <a
              [routerLink]="link.route"
              [fragment]="link.fragment"
              routerLinkActive="text-[#00D2FF]"
              [routerLinkActiveOptions]="{ exact: link.fragment === undefined }"
              class="text-sm font-medium text-slate-300 hover:text-[#00D2FF] transition-colors duration-150 relative py-1 group"
            >
              {{ link.name }}
              @if (link.badge) {
                <span class="ml-1.5 px-1.5 py-0.5 text-[10px] font-mono rounded bg-[#0070F3]/30 text-[#00D2FF] border border-[#0070F3]/40">
                  {{ link.badge }}
                </span>
              }
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00D2FF] transition-all duration-200 group-hover:w-full"></span>
            </a>
          }
        </nav>

        <!-- Right Action Zone -->
        <div class="flex items-center gap-3">
          <a
            [routerLink]="['/']"
            fragment="contact"
            class="hidden sm:inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#0070F3] hover:bg-[#005BD0] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200 group"
          >
            <span>Book Demo</span>
            <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <!-- Mobile Hamburger Menu Button -->
          <button
            type="button"
            (click)="toggleMobileNav()"
            class="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
            aria-label="Open mobile navigation"
            [attr.aria-expanded]="mobileNavOpen()"
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
      <div class="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          (click)="closeMobileNav()"
          aria-hidden="true"
        ></div>

        <!-- Drawer panel -->
        <div
          class="fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-[#071838] border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-250"
        >
          <div>
            <!-- Header inside drawer with Clickable Logo -->
            <div class="flex items-center justify-between pb-5 border-b border-white/10">
              <a
                routerLink="/"
                (click)="closeMobileNav()"
                class="flex items-center gap-2 cursor-pointer"
                aria-label="Home"
              >
                <img src="/corezan-logo.png" alt="Corezan" class="h-7 w-auto object-contain" />
                <div class="h-5 w-[1px] bg-white/20"></div>
                <img src="/zaro-logo.png" alt="ZARO" class="h-6 w-auto object-contain" />
              </a>

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

            <!-- Mobile Nav Links -->
            <nav class="flex flex-col space-y-1.5 mt-5" aria-label="Mobile Navigation Links">
              @for (link of navLinks; track link.name) {
                <a
                  [routerLink]="link.route"
                  [fragment]="link.fragment"
                  (click)="closeMobileNav()"
                  class="px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between group"
                >
                  <div class="flex items-center gap-2">
                    <span>{{ link.name }}</span>
                    @if (link.badge) {
                      <span class="px-1.5 py-0.5 text-[10px] font-mono rounded bg-[#0070F3]/30 text-[#00D2FF]">
                        {{ link.badge }}
                      </span>
                    }
                  </div>
                  <svg class="w-4 h-4 text-slate-400 group-hover:text-[#00D2FF] group-hover:translate-x-1 fill-none stroke-current stroke-2 transition-all" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              }
            </nav>
          </div>

          <!-- Drawer Footer Zone: Direct Phone, Email, & CTA -->
          <div class="pt-6 border-t border-white/10 space-y-4">
            <a
              [routerLink]="['/']"
              fragment="contact"
              (click)="closeMobileNav()"
              class="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-[#0070F3] hover:bg-[#005BD0] text-white font-semibold text-sm shadow-md transition-all"
            >
              <span>Schedule Enterprise Demo</span>
              <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <!-- Quick Contact Channels in Mobile Menu -->
            <div class="space-y-2 pt-1 text-xs">
              <a
                href="tel:+919940397098"
                class="flex items-center gap-2.5 text-slate-300 hover:text-white py-1 transition-colors"
              >
                <svg class="w-4 h-4 text-[#00D2FF] shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span class="font-mono">+91 99403 97098</span>
              </a>

              <a
                href="mailto:info@corezan.ai"
                class="flex items-center gap-2.5 text-slate-300 hover:text-white py-1 transition-colors"
              >
                <svg class="w-4 h-4 text-[#00D2FF] shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span class="font-mono">info&#64;corezan.ai</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class HeaderComponent {
  private router = inject(Router);

  isScrolled = signal(false);
  mobileNavOpen = signal(false);
  currentUrl = signal(this.router.url);

  isHome = computed(() => {
    const url = this.currentUrl();
    return url === '/' || url.startsWith('/#') || url === '';
  });

  isSolidNav = computed(() => this.isScrolled() || !this.isHome());

  navLinks = [
    { name: 'Home', route: ['/'], fragment: undefined },
    { name: 'Corezan AI', route: ['/'], fragment: 'corezan' },
    { name: 'ZARO Platform', route: ['/'], fragment: 'zaro' },
    { name: 'Industries', route: ['/'], fragment: 'industries' },
    { name: 'Why Us', route: ['/'], fragment: 'why' },
    { name: 'Careers', route: ['/careers'], fragment: undefined, badge: 'Hiring' },
    { name: 'Contact', route: ['/'], fragment: 'contact' },
  ];

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.set(event.urlAfterRedirects);
      }
    });

    // Lock body scrolling when mobile menu is open
    effect(() => {
      if (typeof document !== 'undefined') {
        if (this.mobileNavOpen()) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    if (this.mobileNavOpen()) {
      this.closeMobileNav();
    }
  }

  toggleMobileNav() {
    this.mobileNavOpen.update((open) => !open);
  }

  closeMobileNav() {
    this.mobileNavOpen.set(false);
  }
}
