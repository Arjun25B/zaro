import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZARO_PRODUCTS, ZaroProduct } from '../../data/platform.data';

@Component({
  selector: 'app-zaro-platform',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="zaro" class="bg-[#071838] py-20 text-white border-t border-[#1E3765]/60 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div class="max-w-2xl">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#00D2FF]">
              THE ZARO PLATFORM
            </span>
            <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white">
              Complete Cloud Solutions for Modern Enterprises
            </h2>
            <p class="mt-3 text-slate-300 text-base leading-relaxed">
              Four unified modules engineered to seamlessly orchestrate business processes, spatial virtual models, high-concurrency APIs, and domain verticals.
            </p>
          </div>

          <div>
            <a
              href="#industries"
              class="inline-flex items-center justify-center gap-2 font-semibold text-xs rounded-xl h-10 px-5 bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 backdrop-blur-sm font-mono uppercase tracking-wider transition-all group"
            >
              <span>View All 30+ Modules</span>
              <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- 2x2 Product Card Grid (NOT 4 equal cols) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          @for (product of products; track product.id) {
            <div
              [class]="
                'rounded-2xl p-8 border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between ' +
                getCardClasses(product.tint)
              "
            >
              <div>
                <div class="flex items-center justify-between mb-6">
                  <div class="p-3 rounded-xl bg-white/10 border border-white/10">
                    @if (product.icon === 'briefcase') {
                      <svg class="w-6 h-6 text-[#00D2FF] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect width="20" height="14" x="2" y="7" rx="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    } @else if (product.icon === 'layers') {
                      <svg class="w-6 h-6 text-indigo-300 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                      </svg>
                    } @else if (product.icon === 'network') {
                      <svg class="w-6 h-6 text-teal-400 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect x="16" y="16" width="6" height="6" rx="1" />
                        <rect x="2" y="16" width="6" height="6" rx="1" />
                        <rect x="9" y="2" width="6" height="6" rx="1" />
                        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8" />
                      </svg>
                    } @else {
                      <svg class="w-6 h-6 text-rose-400 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
                      </svg>
                    }
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {{ product.tag }}
                  </span>
                </div>

                <h3 class="font-display text-2xl font-bold text-white mb-3">
                  {{ product.title }}
                </h3>

                <p class="text-sm text-slate-300 leading-relaxed mb-6">
                  {{ product.description }}
                </p>
              </div>

              <div class="pt-6 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {{ product.category }}
                </span>

                <a
                  href="#contact"
                  class="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#00D2FF] transition-colors"
                >
                  <span>{{ product.linkText }}</span>
                  <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ZaroPlatformComponent {
  products: ZaroProduct[] = ZARO_PRODUCTS;

  getCardClasses(tint: string): string {
    switch (tint) {
      case 'blue':
        return 'bg-gradient-to-br from-[#0B214A]/90 to-[#051129] border-[#0070F3]/40 hover:border-[#00D2FF] shadow-[#0070F3]/10';
      case 'indigo':
        // Strictly deep slate-indigo #1A1A3E, NO purple
        return 'bg-gradient-to-br from-[#1A1A3E] to-[#0F0F28] border-[#2E2D62] hover:border-indigo-400/60 shadow-indigo-950/30';
      case 'teal':
        return 'bg-gradient-to-br from-[#06242B]/90 to-[#051129] border-teal-500/30 hover:border-teal-400/60 shadow-teal-950/20';
      case 'rose':
        return 'bg-gradient-to-br from-[#2D0D1E]/80 to-[#051129] border-rose-500/30 hover:border-rose-400/60 shadow-rose-950/20';
      default:
        return 'bg-[#0B214A] border-white/10';
    }
  }
}
