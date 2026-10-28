import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CATEGORIES,
  CategoryFilter,
  INDUSTRY_MODULES,
  IndustryModule,
} from '../../data/industry-modules.data';

@Component({
  selector: 'app-industry-modules',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="industries" class="relative bg-white py-20 text-slate-900 border-t border-slate-200 overflow-hidden">
      <!-- Subtle Ambient Blue Tint to match site theme -->
      <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-blue-50/60 via-sky-50/30 to-transparent blur-3xl opacity-80" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-10">
          <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#0070F3]">
            INDUSTRY-SPECIFIC SOLUTIONS
          </span>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
            ZARO Featured Industry Modules
          </h2>
          <p class="mt-3 text-slate-600 text-base leading-relaxed">
            30+ battle-tested vertical deployments pre-configured for regulatory frameworks, IoT sensory feeds, automated auditing, and ERP workflows.
          </p>

          <!-- Filter Chips Row -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-2">
            @for (category of categories; track category) {
              <button
                type="button"
                (click)="setCategory(category)"
                [class]="
                  activeCategory() === category
                    ? 'px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 bg-[#0070F3] text-white shadow-sm'
                    : 'px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 bg-slate-100 text-slate-600 border border-slate-200/80 hover:bg-slate-200/70 hover:text-slate-900'
                "
              >
                {{ category }}
                @if (category === 'All') {
                  <span>({{ totalCount }})</span>
                }
              </button>
            }
          </div>
        </div>

        <!-- 6-Column Tile Grid Matching Reference Design -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          @for (module of filteredModules(); track module.id) {
            @if (module.id === 'custom') {
              <a
                href="#contact"
                class="rounded-2xl p-6 min-h-[136px] flex flex-col items-center justify-center text-center transition-all duration-200 group cursor-pointer border border-[#0070F3]/40 bg-blue-50/25 hover:border-[#0070F3] hover:bg-blue-50/60 hover:shadow-md hover:-translate-y-1 text-[#0070F3]"
                [title]="module.description"
              >
                <div class="w-8 h-8 flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                  <svg class="w-7 h-7 stroke-current stroke-[2.2] fill-none" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
                <span class="font-display text-xs sm:text-sm font-semibold tracking-tight text-[#0070F3] leading-snug">
                  {{ module.name }}
                </span>
              </a>
            } @else {
              <div
                class="rounded-2xl p-6 min-h-[136px] flex flex-col items-center justify-center text-center transition-all duration-200 group cursor-pointer border border-slate-200/90 bg-white hover:border-[#0070F3] hover:shadow-lg hover:-translate-y-1 shadow-xs"
                [title]="module.description"
              >
                <div class="w-8 h-8 flex items-center justify-center text-[#0070F3] mb-3 transition-transform group-hover:scale-110">
                  @switch (module.icon) {
                    @case ('plane') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M12 2L3 20l9-4 9 4L12 2z" />
                      </svg>
                    }
                    @case ('industrial') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <rect x="4" y="3" width="16" height="18" rx="2" />
                        <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
                      </svg>
                    }
                    @case ('constructions') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M2 18h20M5 18a7 7 0 0 1 14 0M10 6v5M14 6v5M9 11h6" />
                      </svg>
                    }
                    @case ('public-services') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M3 21h18M3 10h18M12 3l9 7H3l9-7zM6 10v11M10 10v11M14 10v11M18 10v11" />
                      </svg>
                    }
                    @case ('municipality') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M5 22V8a7 7 0 0 1 14 0v14M9 22v-6a3 3 0 0 1 6 0v6" />
                      </svg>
                    }
                    @case ('cities') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M4 21V12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9M10 21V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v14M16 21V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v18" />
                      </svg>
                    }
                    @case ('campus') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    }
                    @case ('buildings') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <rect x="4" y="2" width="16" height="20" rx="2" />
                        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01" />
                      </svg>
                    }
                    @case ('transportation') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="m16 3 4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16" />
                      </svg>
                    }
                    @case ('logistics') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-5l-3-4h-5v10Z" />
                        <circle cx="7" cy="18" r="2" />
                        <circle cx="17" cy="18" r="2" />
                      </svg>
                    }
                    @case ('ports') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    }
                    @case ('marine') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    }
                    @case ('telecom') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
                        <circle cx="12" cy="20" r="1" fill="currentColor" />
                      </svg>
                    }
                    @case ('metering') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    }
                    @case ('retail') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    }
                    @case ('hospitality') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      </svg>
                    }
                    @case ('healthcare') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    }
                    @case ('waste') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                      </svg>
                    }
                    @case ('farming') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
                      </svg>
                    }
                    @case ('mining') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="m21 16-9 5-9-5V8l9-5 9 5v8z" />
                        <path d="m3.27 6.96 8.73 4.99 8.73-4.99M12 22.08V12" />
                      </svg>
                    }
                    @case ('oil-gas') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M10 2v7.31a2 2 0 0 1-.37 1.17L4.2 18.71A2 2 0 0 0 5.86 22h12.28a2 2 0 0 0 1.66-3.29l-5.43-8.23A2 2 0 0 1 14 9.31V2M8.5 2h7M7 16h10" />
                      </svg>
                    }
                    @case ('parking') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M12 19V5M5 12l7-7 7 7" />
                      </svg>
                    }
                    @case ('equestrian') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    }
                    @case ('defense') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    }
                    @case ('laundry') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <circle cx="12" cy="12" r="4" />
                        <path d="M6 7h.01M9 7h.01" />
                      </svg>
                    }
                    @case ('amusement') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                      </svg>
                    }
                    @case ('warehouses') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M3 21V9l9-6 9 6v12M9 21v-8h6v8M9 9h.01M15 9h.01" />
                      </svg>
                    }
                    @case ('media') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                      </svg>
                    }
                    @case ('climate') {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      </svg>
                    }
                    @default {
                      <svg class="w-7 h-7 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    }
                  }
                </div>
                <span class="font-display text-xs sm:text-sm font-semibold tracking-tight text-slate-800 group-hover:text-[#0070F3] transition-colors leading-snug">
                  {{ module.name }}
                </span>
              </div>
            }
          }
        </div>
      </div>
    </section>
  `,
})
export class IndustryModulesComponent {
  categories = CATEGORIES;
  totalCount = INDUSTRY_MODULES.length;
  activeCategory = signal<CategoryFilter>('All');

  filteredModules = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All'
      ? INDUSTRY_MODULES
      : INDUSTRY_MODULES.filter((m) => m.category === cat);
  });

  setCategory(category: CategoryFilter) {
    this.activeCategory.set(category);
  }
}
