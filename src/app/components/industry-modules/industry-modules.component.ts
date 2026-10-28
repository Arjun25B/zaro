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
    <section id="industries" class="bg-slate-50/70 py-20 text-slate-900 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    : 'px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
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

        <!-- 6-Column Tile Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          @for (module of filteredModules(); track module.id) {
            <div
              class="bg-white rounded-xl p-4 border border-[#DCE5F0] hover:border-[#0070F3] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              [title]="module.description"
            >
              <div>
                <div class="p-2.5 rounded-lg bg-sky-50 border border-sky-100 w-fit mb-3 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-sky-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <h4 class="font-display text-xs font-bold text-slate-800 leading-snug group-hover:text-[#0070F3] transition-colors">
                  {{ module.name }}
                </h4>
              </div>

              <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[10px] font-mono text-slate-400">
                  {{ module.category }}
                </span>
                <svg class="w-3 h-3 text-slate-300 group-hover:text-[#0070F3] group-hover:translate-x-0.5 transition-all fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          }

          <!-- Plus Custom Domain Card -->
          <a
            href="#contact"
            class="bg-gradient-to-br from-[#0070F3]/5 to-sky-500/10 rounded-xl p-4 border border-dashed border-[#0070F3]/40 hover:border-[#0070F3] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div class="p-2.5 rounded-lg bg-[#0070F3]/10 border border-[#0070F3]/20 w-fit mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-[#0070F3] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
              </div>
              <h4 class="font-display text-xs font-bold text-[#0070F3] leading-snug">
                Custom Domain Architecture
              </h4>
            </div>

            <div class="mt-3 pt-2 border-t border-[#0070F3]/10 flex items-center justify-between text-[10px] font-semibold text-[#0070F3]">
              <span>Request Schema</span>
              <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-all fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>
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
