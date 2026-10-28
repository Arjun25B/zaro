import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-pillars',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-[#F5F8FC] py-20 text-[#0F172A] border-t border-b border-[#DCE5F0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Eyebrow & Intro -->
        <div class="max-w-2xl mb-12">
          <span class="text-xs font-bold uppercase tracking-widest text-[#0070F3] font-mono">
            Architectural Synergy
          </span>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Two Specialized Pillars. One Sovereign Foundation.
          </h2>
          <p class="mt-3 text-slate-600 text-base leading-relaxed">
            By decoupling pure cognitive intelligence from high-throughput cloud execution, our dual-brand architecture eliminates operational bottlenecks.
          </p>
        </div>

        <!-- 65% / 35% Asymmetric Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <!-- Left Zone (65% / 8 cols): 2 Vertically Offset White Cards -->
          <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <!-- Card 1: Corezan AI -->
            <div class="bg-white rounded-2xl p-8 border border-[#DCE5F0] shadow-sm hover:shadow-xl transition-all duration-300 md:mt-0 flex flex-col justify-between h-full group">
              <div>
                <div class="w-12 h-12 rounded-xl bg-[#0070F3]/10 border border-[#0070F3]/20 flex items-center justify-center text-[#0070F3] mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <line x1="8" y1="16" x2="8" y2="16.01" />
                    <line x1="16" y1="16" x2="16" y2="16.01" />
                  </svg>
                </div>
                <div class="text-xs font-mono font-semibold uppercase tracking-wider text-[#0070F3]">
                  The Cognitive Engine
                </div>
                <h3 class="font-display text-2xl font-bold text-slate-900 mt-2 mb-3">
                  Corezan AI
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Enterprise-grade machine intelligence designed for mission-critical operations. From proprietary multi-modal models to autonomous decision engines, Corezan unlocks predictive clarity across your complex datasets.
                </p>
              </div>

              <div class="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#corezan"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-[#0070F3] hover:text-[#005BD0] transition-colors"
                >
                  <span>Explore AI Services</span>
                  <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <span class="text-xs font-mono text-slate-400">01 / COGNITIVE</span>
              </div>
            </div>

            <!-- Card 2: ZARO Cloud (vertically offset on desktop) -->
            <div class="bg-white rounded-2xl p-8 border border-[#DCE5F0] shadow-sm hover:shadow-xl transition-all duration-300 md:translate-y-6 flex flex-col justify-between h-full group">
              <div>
                <div class="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </div>
                <div class="text-xs font-mono font-semibold uppercase tracking-wider text-teal-600">
                  The Execution Fabric
                </div>
                <h3 class="font-display text-2xl font-bold text-slate-900 mt-2 mb-3">
                  ZARO Cloud Platform
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  The unified cloud backbone that connects operations, digital twins, enterprise resource planning, and third-party systems through high-velocity APIs with 99.99% uptime guarantees.
                </p>
              </div>

              <div class="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#zaro"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  <span>Explore ZARO Suite</span>
                  <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <span class="text-xs font-mono text-slate-400">02 / EXECUTION</span>
              </div>
            </div>
          </div>

          <!-- Right Zone (35% / 4 cols): Tall Dark Anchor Card -->
          <div class="lg:col-span-4 bg-[#071838] rounded-2xl p-8 sm:p-10 border border-white/10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-48 h-48 bg-[#00D2FF]/15 blur-3xl pointer-events-none"></div>

            <div class="relative z-10 space-y-6">
              <div class="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#00D2FF]">
                <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              <div class="space-y-1">
                <h3 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Intelligence.<br />
                  Integration.<br />
                  Innovation.
                </h3>
              </div>

              <p class="text-sm text-slate-300 leading-relaxed">
                When cognitive algorithms communicate natively with cloud infrastructure, enterprises move from reactionary decision-making to proactive, automated orchestration at global scale.
              </p>
            </div>

            <div class="relative z-10 pt-8 mt-8 border-t border-white/10 space-y-4">
              <div class="h-1.5 w-24 rounded-full bg-gradient-to-r from-[#0070F3] to-[#00D2FF]"></div>
              <div class="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>DUAL-ENGINE COUPLING</span>
                <span class="text-[#00D2FF] font-bold">100% UNIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BrandPillarsComponent {}
