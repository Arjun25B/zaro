import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COREZAN_SERVICES, CorezanService } from '../../data/platform.data';

@Component({
  selector: 'app-corezan-ai',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="corezan" class="bg-[#051129] py-20 text-white border-t border-white/10 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div class="max-w-2xl">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#0070F3]">
              COREZAN AI SOLUTIONS
            </span>
            <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white">
              Intelligent Systems for Complex Operations
            </h2>
            <p class="mt-3 text-slate-300 text-base leading-relaxed">
              We engineer deterministic AI models, retrieval systems, and multi-agent workflows that run securely inside your VPC or on-premises infrastructure.
            </p>
          </div>

          <div class="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div class="p-2.5 rounded-xl bg-[#0070F3]/20 text-[#00D2FF]">
              <svg class="w-6 h-6 animate-pulse fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                <path d="M12 5v14" />
              </svg>
            </div>
            <div class="text-xs font-mono">
              <div class="text-white font-bold">SOVEREIGN AI ENGINE</div>
              <div class="text-slate-400">Zero Public Data Leakage</div>
            </div>
          </div>
        </div>

        <!-- 1 + 2x2 Layout Architecture -->
        <div class="space-y-6">
          <!-- Top Featured 1 Full-Width Hero Card -->
          @if (heroService) {
            <div class="rounded-2xl p-8 lg:p-10 bg-gradient-to-r from-[#0B214A] to-[#071838] border border-[#0070F3]/30 shadow-2xl relative overflow-hidden group">
              <div class="absolute top-0 right-0 w-96 h-96 bg-[#00D2FF]/10 blur-[100px] pointer-events-none"></div>

              <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-8 space-y-4">
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0070F3]/20 border border-[#0070F3]/40 text-[#00D2FF] text-xs font-mono">
                    <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    </svg>
                    <span>{{ heroService.eyebrow }}</span>
                  </div>

                  <h3 class="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {{ heroService.title }}
                  </h3>

                  <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                    {{ heroService.description }}
                  </p>

                  <!-- Capabilities Badges -->
                  <div class="pt-2 flex flex-wrap gap-2">
                    @for (cap of heroService.capabilities; track cap) {
                      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200">
                        <svg class="w-3.5 h-3.5 text-[#00D2FF] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        {{ cap }}
                      </span>
                    }
                  </div>
                </div>

                <div class="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
                  <div class="space-y-1 text-left lg:text-right">
                    <div class="text-2xl font-mono font-bold text-[#00D2FF]">&gt;99.4%</div>
                    <div class="text-xs text-slate-400">RAG Semantic Precision</div>
                  </div>

                  <a
                    href="#contact"
                    class="w-full sm:w-auto h-11 px-6 rounded-xl bg-[#0070F3] hover:bg-[#005BD0] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 shadow-sm transition-all group"
                  >
                    <span>Consult with AI Team</span>
                    <svg class="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          }

          <!-- Bottom 2x2 Grid for 4 Sub-services -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @for (service of subServices; track service.id) {
              <div class="bg-[#0B214A]/70 rounded-2xl p-7 border border-white/10 hover:border-[#0070F3]/40 hover:bg-[#0B214A] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <div class="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      @if (service.icon === 'cpu') {
                        <svg class="w-5 h-5 text-[#00D2FF] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <rect width="16" height="16" x="4" y="4" rx="2" />
                          <rect width="6" height="6" x="9" y="9" />
                          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
                        </svg>
                      } @else if (service.icon === 'chart') {
                        <svg class="w-5 h-5 text-sky-400 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                      } @else if (service.icon === 'cloud') {
                        <svg class="w-5 h-5 text-teal-400 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                        </svg>
                      } @else {
                        <svg class="w-5 h-5 text-indigo-300 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      }
                    </div>
                    <span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {{ service.eyebrow }}
                    </span>
                  </div>

                  <h4 class="font-display text-xl font-bold text-white mb-2">
                    {{ service.title }}
                  </h4>

                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    {{ service.description }}
                  </p>
                </div>

                <div class="pt-4 border-t border-white/10 flex flex-wrap gap-2 items-center justify-between">
                  <div class="flex flex-wrap gap-1.5">
                    @for (c of service.capabilities; track c) {
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                        {{ c }}
                      </span>
                    }
                  </div>

                  <a
                    href="#contact"
                    class="text-xs font-semibold text-[#00D2FF] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Details</span>
                    <svg class="w-3 h-3 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CorezanAiComponent {
  heroService = COREZAN_SERVICES.find((s) => s.isHero);
  subServices = COREZAN_SERVICES.filter((s) => !s.isHero);
}
