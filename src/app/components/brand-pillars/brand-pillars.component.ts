import {
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PillarCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  statusBadge: string;
  features: string[];
  link: string;
  linkText: string;
  icon: 'brain' | 'cloud' | 'shield' | 'layers';
}

@Component({
  selector: 'app-brand-pillars',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Natural Flow Section (Zero Fake Scroll Height, Zero Dead Space) -->
    <section
      id="pillars"
      class="relative bg-white py-16 sm:py-20 border-t border-b border-slate-200 overflow-hidden select-none"
    >
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-10">
        <!-- Top Header & Interactive Navigation Controls -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="space-y-2 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-blue-50 text-[#0070F3] border border-blue-200/80">
              <span class="w-2 h-2 rounded-full bg-[#0070F3]"></span>
              <span>ARCHITECTURAL SYNERGY</span>
            </div>

            <h2 class="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Four Connected Foundations.
              <span class="block text-slate-500 font-bold">
                Zero Operational Friction.
              </span>
            </h2>
          </div>

          <!-- Controls: Counter + Prev/Next Buttons -->
          <div class="flex items-center gap-3 shrink-0">
            <!-- Counter Pill -->
            <div class="px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs text-slate-600 font-semibold tracking-widest">
              <span class="text-[#0070F3] font-bold">0{{ activeIndex() + 1 }}</span>
              <span class="opacity-40 mx-1">/</span>
              <span>0{{ pillars.length }}</span>
            </div>

            <!-- Prev Arrow Button -->
            <button
              type="button"
              (click)="prevPillar()"
              class="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0070F3]"
              aria-label="Previous foundation card"
            >
              <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Next Arrow Button -->
            <button
              type="button"
              (click)="nextPillar()"
              class="w-10 h-10 rounded-xl bg-[#0070F3] hover:bg-[#005BD0] text-white flex items-center justify-center shadow-sm shadow-[#0070F3]/30 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0070F3]"
              aria-label="Next foundation card"
            >
              <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Horizontal Interactive Cards Stage -->
        <div class="relative overflow-visible py-2">
          <div
            #trackContainer
            class="flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-6 scrollbar-none scroll-smooth snap-x snap-mandatory"
          >
            @for (pillar of pillars; track pillar.id; let i = $index) {
              <div
                (click)="setActivePillar(i)"
                [class]="
                  'flex-shrink-0 w-[84vw] sm:w-[460px] lg:w-[480px] rounded-3xl p-7 sm:p-9 border flex flex-col justify-between relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] snap-start cursor-pointer ' +
                  (activeIndex() === i
                    ? 'text-white border-[#0070F3] shadow-[0_20px_50px_-10px_rgba(0,112,243,0.32)] ring-1 ring-[#00D2FF]/40 opacity-100 scale-100 z-20'
                    : 'border-slate-200/90 text-slate-800 shadow-sm opacity-60 hover:opacity-85 scale-[0.98] z-10')
                "
              >
                <!-- Background Layers for 700ms Silky Smooth Opacity Cross-Fade -->
                <div
                  class="absolute inset-0 bg-slate-50/95 transition-opacity duration-700 ease-out pointer-events-none"
                  [class.opacity-100]="activeIndex() !== i"
                  [class.opacity-0]="activeIndex() === i"
                ></div>
                <div
                  class="absolute inset-0 bg-gradient-to-br from-[#071838] via-[#0A2D6E] to-[#0D3F99] transition-opacity duration-700 ease-out pointer-events-none"
                  [class.opacity-100]="activeIndex() === i"
                  [class.opacity-0]="activeIndex() !== i"
                ></div>

                <!-- Card Header & Content -->
                <div class="relative z-10 space-y-5">
                  <div class="flex items-center justify-between">
                    <span
                      [class]="
                        'text-xs font-mono font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full transition-colors duration-700 ' +
                        (activeIndex() === i
                          ? 'bg-[#00D2FF]/15 text-[#00D2FF] border border-[#00D2FF]/30'
                          : 'bg-slate-200/70 text-slate-600 border border-slate-300')
                      "
                    >
                      {{ pillar.tag }}
                    </span>

                    <!-- Pillar Icon -->
                    <div
                      [class]="
                        'w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-700 ' +
                        (activeIndex() === i
                          ? 'bg-white/10 border-white/20 text-[#00D2FF]'
                          : 'bg-white border-slate-200 text-slate-500')
                      "
                    >
                      @if (pillar.icon === 'brain') {
                        <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                          <path d="M12 5v14" />
                        </svg>
                      } @else if (pillar.icon === 'cloud') {
                        <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                        </svg>
                      } @else if (pillar.icon === 'shield') {
                        <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                      } @else if (pillar.icon === 'layers') {
                        <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                        </svg>
                      }
                    </div>
                  </div>

                  <div>
                    <h3
                      [class]="
                        'font-display text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-700 ' +
                        (activeIndex() === i ? 'text-white' : 'text-slate-900')
                      "
                    >
                      {{ pillar.title }}
                    </h3>
                    <div
                      [class]="
                        'text-xs font-mono mt-1 uppercase tracking-wide transition-colors duration-700 ' +
                        (activeIndex() === i ? 'text-cyan-300' : 'text-[#0070F3] font-semibold')
                      "
                    >
                      {{ pillar.subtitle }}
                    </div>
                  </div>

                  <p
                    [class]="
                      'text-sm leading-relaxed transition-colors duration-700 ' +
                      (activeIndex() === i ? 'text-slate-200' : 'text-slate-600')
                    "
                  >
                    {{ pillar.description }}
                  </p>

                  <!-- 4 Concrete Architecture Features Checklist -->
                  <div
                    [class]="
                      'pt-4 border-t transition-colors duration-700 grid grid-cols-1 sm:grid-cols-2 gap-2 ' +
                      (activeIndex() === i ? 'border-white/10' : 'border-slate-200')
                    "
                  >
                    @for (feat of pillar.features; track feat) {
                      <div class="flex items-center gap-2">
                        <span
                          [class]="
                            'w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors duration-700 ' +
                            (activeIndex() === i
                              ? 'bg-[#00D2FF]/20 text-[#00D2FF]'
                              : 'bg-blue-100 text-[#0070F3]')
                          "
                        >
                          ✓
                        </span>
                        <span
                          [class]="
                            'text-xs font-medium transition-colors duration-700 ' +
                            (activeIndex() === i ? 'text-slate-200' : 'text-slate-700')
                          "
                        >
                          {{ feat }}
                        </span>
                      </div>
                    }
                  </div>
                </div>

                <!-- Card Footer Zone -->
                <div class="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span
                    [class]="
                      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-colors duration-700 ' +
                      (activeIndex() === i
                        ? 'bg-white/10 text-cyan-200 border border-cyan-400/30'
                        : 'bg-slate-200/70 text-slate-700 border border-slate-300/80')
                    "
                  >
                    <span
                      [class]="
                        'w-1.5 h-1.5 rounded-full animate-pulse ' +
                        (activeIndex() === i ? 'bg-[#00D2FF]' : 'bg-[#0070F3]')
                      "
                    ></span>
                    <span>{{ pillar.statusBadge }}</span>
                  </span>

                  <!-- Direct Action Link / Button -->
                  <a
                    [href]="pillar.link"
                    [class]="
                      'inline-flex items-center gap-2 h-10 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-700 group ' +
                      (activeIndex() === i
                        ? 'bg-white/15 hover:bg-white/25 text-white border border-white/30 shadow-sm'
                        : 'bg-slate-900 hover:bg-[#0070F3] text-white shadow-sm')
                    "
                  >
                    <span>{{ pillar.linkText }}</span>
                    <svg class="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Bottom Segmented Indicator Dots -->
        <div class="flex items-center justify-center gap-2 pt-2">
          @for (pillar of pillars; track pillar.id; let i = $index) {
            <button
              type="button"
              (click)="setActivePillar(i)"
              [class]="
                'h-2 rounded-full transition-all duration-300 focus:outline-none ' +
                (activeIndex() === i
                  ? 'w-8 bg-[#0070F3]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400')
              "
              [attr.aria-label]="'Go to foundation card ' + (i + 1)"
            ></button>
          }
        </div>
      </div>
    </section>
  `,
})
export class BrandPillarsComponent {
  @ViewChild('trackContainer') trackContainer!: ElementRef<HTMLDivElement>;

  activeIndex = signal<number>(0);

  pillars: PillarCard[] = [
    {
      id: 'cognitive',
      tag: '01 / COGNITIVE ENGINE',
      title: 'Corezan Cognitive AI',
      subtitle: 'Deterministic Intelligence Layer',
      description:
        'Custom private Large Language Models, domain-specific retrieval (RAG), and autonomous agent swarms engineered for high-stakes enterprise decisions without public data leak risks.',
      statusBadge: 'Sovereign Enclave',
      features: [
        'Private LLM Topologies',
        'Autonomous Agent Swarms',
        'Air-Gapped Vector Stores',
        'Deterministic Logic Audits',
      ],
      link: '/#corezan',
      linkText: 'Explore AI Engine',
      icon: 'brain',
    },
    {
      id: 'cloud',
      tag: '02 / EXECUTION FABRIC',
      title: 'ZARO Unified Cloud',
      subtitle: 'High-Throughput Operating Backbone',
      description:
        'Microservices-based cloud platform with sub-10ms API meshes, high-concurrency message queues, and distributed multi-region state replication for real-time applications.',
      statusBadge: 'Sub-10ms Mesh',
      features: [
        'Multi-Region Replication',
        'Sub-10ms GraphQL Mesh',
        'Autonomous Failover',
        'Distributed Actor Engine',
      ],
      link: '/#zaro',
      linkText: 'Explore Cloud Fabric',
      icon: 'cloud',
    },
    {
      id: 'security',
      tag: '03 / AIR-GAPPED SECURITY',
      title: 'Sovereign Security',
      subtitle: 'Zero-Trust Infrastructure',
      description:
        'Cryptographically enforced zero-trust network policies, role-based authorization, and automated compliance auditing for defense, aerospace, and banking institutions.',
      statusBadge: 'Zero-Trust Vault',
      features: [
        'Mutual TLS (mTLS) Mesh',
        'Hardware Security Modules',
        'ISO 27001 & SOC2 Controls',
        'Immutable Audit Trail',
      ],
      link: '/#why',
      linkText: 'Inspect Security',
      icon: 'shield',
    },
    {
      id: 'twins',
      tag: '04 / SPATIAL MIRROR',
      title: 'Real-Time Digital Twins',
      subtitle: '3D Physics & Sensory Feeds',
      description:
        'Real-time physical asset mirrors, spatial IoT visualization, high-frequency telemetry overlays, and predictive physics simulations across 30+ domain verticals.',
      statusBadge: '60 FPS Physics',
      features: [
        'Sensor Ingestion at Scale',
        'Spatial 3D Asset Models',
        'Predictive Maintenance AI',
        'SCADA & Inductive Feeds',
      ],
      link: '/#zaro',
      linkText: 'Explore Spatial Twins',
      icon: 'layers',
    },
  ];

  setActivePillar(index: number) {
    this.activeIndex.set(index);
    if (this.trackContainer?.nativeElement) {
      const card = this.trackContainer.nativeElement.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }

  nextPillar() {
    const next = (this.activeIndex() + 1) % this.pillars.length;
    this.setActivePillar(next);
  }

  prevPillar() {
    const prev = (this.activeIndex() - 1 + this.pillars.length) % this.pillars.length;
    this.setActivePillar(prev);
  }
}
