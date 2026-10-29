import { Component, signal, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShapeGridComponent } from '../shape-grid/shape-grid.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ShapeGridComponent],
  template: `
    <section
      id="hero"
      class="relative min-h-[100dvh] pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#051129]"
    >
      <!-- Ambient Radial Glow Orbs -->
      <div
        class="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#0070F3]/20 blur-[130px] will-change-transform"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] rounded-full bg-[#00D2FF]/15 blur-[140px] will-change-transform"
        aria-hidden="true"
      ></div>

      <!-- Desktop PC: Interactive Perspective ShapeGrid Canvas Background (>= 768px) -->
      @if (!isMobile()) {
        <div class="hidden md:block absolute inset-0 z-0 pointer-events-none opacity-65">
          <app-shape-grid
            shape="square"
            direction="right"
            lineColor="rgba(0, 112, 243, 0.28)"
            hoverColor="#00D2FF"
            hoverFillColor="#0070F3"
            [fillOpacity]="0.3"
            [cellSize]="48"
            [speed]="0.35"
            [tiltX]="0"
            [tiltY]="-18"
            [rainbow]="false"
            [radius]="1.4"
            [glow]="0.45"
          />
        </div>
      }

      <!-- Mobile View: Ultra-Fast Lightweight Unsplash Glowing Blue Wave Background (< 768px, Zero Canvas Lag) -->
      <div class="md:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          [src]="mobileBgUrl"
          alt="Abstract blue glowing dots forming wave patterns"
          loading="eager"
          decoding="async"
          class="w-full h-full object-cover object-center opacity-45 mix-blend-screen scale-105 transition-opacity duration-700"
          (error)="handleMobileBgError($event)"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#051129]/80 via-transparent to-[#051129] pointer-events-none"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <!-- Left Column (6 cols): Messaging & CTAs -->
          <div class="lg:col-span-6 space-y-6 text-left">
            <!-- Pulsing Status Badge -->
            <div>
              <div class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/30">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
                </span>
                <span>Two Brands. One Connected Vision.</span>
              </div>
            </div>

            <!-- Fluid H1 Headline -->
            <h1 class="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.08] text-white">
              AI-Powered Innovation.
              <span class="block text-gradient mt-1">
                Cloud-Driven Possibilities.
              </span>
            </h1>

            <!-- Subtitle -->
            <p class="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              We engineer custom enterprise AI models with <strong class="text-white font-semibold">Corezan</strong> and connect your entire business operational lifecycle through the unified <strong class="text-white font-semibold">ZARO</strong> cloud fabric.
            </p>

            <!-- CTAs -->
            <div class="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#zaro"
                class="inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-xl h-11 px-6 bg-[#0070F3] hover:bg-[#005BD0] text-white shadow-md shadow-[#0070F3]/25 transition-all group"
              >
                <span>Explore ZARO Platform</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#corezan"
                class="inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-xl h-11 px-6 bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 backdrop-blur-sm transition-all"
              >
                <span>Our AI Solutions</span>
              </a>
            </div>

            <!-- Enterprise Telemetry Stats -->
            <div class="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div class="font-display text-xl sm:text-2xl font-bold text-white">30+</div>
                <div class="text-xs text-slate-400">Industry Modules</div>
              </div>
              <div>
                <div class="font-display text-xl sm:text-2xl font-bold text-[#00D2FF]">&lt;10ms</div>
                <div class="text-xs text-slate-400">API Latency Mesh</div>
              </div>
              <div>
                <div class="font-display text-xl sm:text-2xl font-bold text-white">99.99%</div>
                <div class="text-xs text-slate-400">Uptime SLA</div>
              </div>
            </div>
          </div>

          <!-- Right Column (6 cols): Orbital Network Diagram -->
          <div class="lg:col-span-6 flex items-center justify-center relative">
            <div class="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[460px] aspect-square flex items-center justify-center">
              <!-- Outer Dashed Orbit Track -->
              <div
                class="absolute inset-4 rounded-full border border-dashed border-[#00D2FF]/20 animate-spin-slow pointer-events-none"
                aria-hidden="true"
              ></div>

              <!-- Inner Pulsing Ring -->
              <div
                class="absolute inset-16 rounded-full border border-white/10 pointer-events-none"
                aria-hidden="true"
              ></div>

              <!-- Center Hub: ZARO Core -->
              <div class="relative z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#0B214A] to-[#071838] border-2 border-[#00D2FF]/60 shadow-[0_0_50px_rgba(0,210,255,0.25)] backdrop-blur-xl">
                <img
                  src="/zaro-logo.png"
                  alt="ZARO Core Hub"
                  class="h-10 w-auto object-contain drop-shadow"
                />
                <span class="mt-1 text-[10px] font-mono tracking-widest uppercase text-[#00D2FF] font-semibold">
                  Unified Cloud
                </span>
              </div>

              <!-- Satellite Node 1: Top-Left (Artificial Intelligence) -->
              <div class="absolute top-2 left-2 z-10 flex flex-col items-center text-center p-3 rounded-2xl bg-[#071838]/90 border border-[#0070F3]/40 shadow-lg backdrop-blur-md transition-transform hover:-translate-y-1">
                <div class="p-2.5 rounded-xl bg-[#0070F3]/20 text-[#00D2FF] mb-1.5">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <line x1="8" y1="16" x2="8" y2="16.01" />
                    <line x1="16" y1="16" x2="16" y2="16.01" />
                  </svg>
                </div>
                <span class="text-xs font-semibold text-white">Corezan AI</span>
                <span class="text-[10px] text-slate-400">Autonomous Models</span>
              </div>

              <!-- Satellite Node 2: Top-Right (Cloud Computing) -->
              <div class="absolute top-2 right-2 z-10 flex flex-col items-center text-center p-3 rounded-2xl bg-[#071838]/90 border border-white/15 shadow-lg backdrop-blur-md transition-transform hover:-translate-y-1">
                <div class="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 mb-1.5">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </div>
                <span class="text-xs font-semibold text-white">Cloud Fabric</span>
                <span class="text-[10px] text-slate-400">Multi-Region Mesh</span>
              </div>

              <!-- Satellite Node 3: Bottom-Left (Automation & Integration) -->
              <div class="absolute bottom-2 left-2 z-10 flex flex-col items-center text-center p-3 rounded-2xl bg-[#071838]/90 border border-teal-500/30 shadow-lg backdrop-blur-md transition-transform hover:translate-y-1">
                <div class="p-2.5 rounded-xl bg-teal-500/20 text-teal-400 mb-1.5">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
                  </svg>
                </div>
                <span class="text-xs font-semibold text-white">Automation</span>
                <span class="text-[10px] text-slate-400">Event-Driven APIs</span>
              </div>

              <!-- Satellite Node 4: Bottom-Right (Business Applications) -->
              <div class="absolute bottom-2 right-2 z-10 flex flex-col items-center text-center p-3 rounded-2xl bg-[#071838]/90 border border-[#2E2D62] shadow-lg backdrop-blur-md transition-transform hover:translate-y-1">
                <div class="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 mb-1.5">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="14" x="2" y="7" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <span class="text-xs font-semibold text-white">Enterprise Apps</span>
                <span class="text-[10px] text-slate-400">Connected Ops</span>
              </div>

              <!-- Connecting Conduits -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 460" fill="none">
                <path d="M 90 90 L 175 175" stroke="#00D2FF" stroke-width="1.5" stroke-dasharray="4 4" stroke-opacity="0.4" />
                <path d="M 370 90 L 285 175" stroke="#0070F3" stroke-width="1.5" stroke-dasharray="4 4" stroke-opacity="0.4" />
                <path d="M 90 370 L 175 285" stroke="#2DD4BF" stroke-width="1.5" stroke-dasharray="4 4" stroke-opacity="0.4" />
                <path d="M 370 370 L 285 285" stroke="#818CF8" stroke-width="1.5" stroke-dasharray="4 4" stroke-opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent implements OnInit {
  isMobile = signal(false);

  // Unsplash abstract blue glowing dots forming wave patterns (photo r5lbaK3fDaM)
  mobileBgUrl = 'https://images.unsplash.com/photo-1707920199992-0692ec79b29e?auto=format&fit=crop&w=1080&q=75';

  ngOnInit() {
    this.checkMobile();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  private checkMobile() {
    if (typeof window !== 'undefined') {
      this.isMobile.set(window.innerWidth < 768);
    }
  }

  handleMobileBgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img && !img.dataset['retried']) {
      img.dataset['retried'] = 'true';
      img.src = 'https://unsplash.com/photos/r5lbaK3fDaM/download?w=1080&q=75';
    }
  }
}
