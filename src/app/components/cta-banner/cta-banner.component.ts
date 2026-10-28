import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-[#071838] py-14 px-4 sm:px-6 lg:px-8 border-y border-[#1E3765]/80 relative overflow-hidden">
      <!-- Background glow strip -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#0070F3]/10 via-transparent to-[#00D2FF]/10 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div class="space-y-2 text-center md:text-left">
          <div class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
            <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
            <span>Deployment Ready in Q1 2026</span>
          </div>
          <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Your Enterprise Transformation Starts Here.
          </h2>
          <p class="text-slate-300 text-sm max-w-xl">
            Unify your enterprise with sovereign cognitive AI and ultra-low-latency cloud telemetry.
          </p>
        </div>

        <div class="flex-shrink-0">
          <a
            href="#contact"
            class="h-11 px-6 rounded-xl bg-[#0070F3] hover:bg-[#005BD0] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 shadow-md shadow-[#0070F3]/25 transition-all group"
          >
            <span>Get in Touch with Founders</span>
            <svg class="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class CtaBannerComponent {}
