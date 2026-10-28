import {
  Component,
  ElementRef,
  ViewChild,
  signal,
  AfterViewInit,
  OnDestroy,
  NgZone,
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
    <!-- Outer Scroll Track (Controls scroll pacing: 340vh) -->
    <div
      #scrollContainer
      class="relative h-[340vh] bg-white"
    >
      <!-- Sticky Viewport Locked to Screen while Scrolling Down -->
      <section
        id="pillars"
        class="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-white border-t border-b border-slate-200 select-none"
      >
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between py-8 h-full max-h-[88vh]">
          <!-- Top Header -->
          <div class="flex items-end justify-between gap-4 pt-2">
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

            <!-- Segmented Counter Pill -->
            <div class="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 font-mono text-xs text-slate-600 font-semibold tracking-widest shrink-0">
              <span class="text-[#0070F3] font-bold">0{{ activeIndex() + 1 }}</span>
              <span class="opacity-40 mx-1">/</span>
              <span>0{{ pillars.length }}</span>
            </div>
          </div>

          <!-- Horizontal Cards Track (Direct GPU Compositor 60FPS Lerp) -->
          <div class="relative my-auto overflow-visible py-4">
            <div
              #trackContainer
              class="flex items-stretch gap-6 sm:gap-8 will-change-transform"
            >
              @for (pillar of pillars; track pillar.id; let i = $index) {
                <div
                  [class]="
                    'flex-shrink-0 w-[82vw] sm:w-[460px] lg:w-[500px] rounded-3xl p-7 sm:p-9 border flex flex-col justify-between relative transition-all duration-500 ease-out ' +
                    (activeIndex() === i
                      ? 'bg-gradient-to-br from-[#071838] via-[#0A2D6E] to-[#0D3F99] text-white border-[#0070F3] shadow-[0_20px_50px_-10px_rgba(0,112,243,0.32)] ring-1 ring-[#00D2FF]/40 opacity-100 scale-100 z-20'
                      : 'bg-slate-50/90 border-slate-200/90 text-slate-800 shadow-sm opacity-55 hover:opacity-75 scale-[0.96] z-10')
                  "
                >
                  <!-- Card Header & Content -->
                  <div class="space-y-5">
                    <div class="flex items-center justify-between">
                      <span
                        [class]="
                          'text-xs font-mono font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full transition-colors duration-300 ' +
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
                          'w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 ' +
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
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        } @else {
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
                          'font-display text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-300 ' +
                          (activeIndex() === i ? 'text-white' : 'text-slate-900')
                        "
                      >
                        {{ pillar.title }}
                      </h3>
                      <div
                        [class]="
                          'text-xs font-mono mt-1 uppercase tracking-wide transition-colors duration-300 ' +
                          (activeIndex() === i ? 'text-[#00D2FF]' : 'text-slate-500')
                        "
                      >
                        {{ pillar.subtitle }}
                      </div>
                    </div>

                    <p
                      [class]="
                        'text-sm sm:text-base leading-relaxed font-normal transition-colors duration-300 ' +
                        (activeIndex() === i ? 'text-blue-100/90' : 'text-slate-600')
                      "
                    >
                      {{ pillar.description }}
                    </p>

                    <!-- Features Grid -->
                    <div class="grid grid-cols-2 gap-2.5 pt-2">
                      @for (feat of pillar.features; track feat) {
                        <div
                          [class]="
                            'flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 ' +
                            (activeIndex() === i
                              ? 'bg-white/10 border border-white/15 text-blue-50 shadow-sm'
                              : 'bg-white border border-slate-200/90 text-slate-700 shadow-xs')
                          "
                        >
                          <span
                            [class]="
                              'w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ' +
                              (activeIndex() === i ? 'bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]' : 'bg-[#0070F3]')
                            "
                          ></span>
                          <span class="truncate">{{ feat }}</span>
                        </div>
                      }
                    </div>
                  </div>

                  <!-- Card Footer -->
                  <div
                    [class]="
                      'pt-5 mt-6 border-t flex items-center justify-between transition-colors duration-300 ' +
                      (activeIndex() === i ? 'border-white/15' : 'border-slate-200/80')
                    "
                  >
                    <!-- Status Badge -->
                    <div class="flex items-center">
                      <span
                        [class]="
                          'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-colors duration-300 ' +
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
                    </div>

                    <!-- Direct Action Link / Button -->
                    <a
                      [href]="pillar.link"
                      [class]="
                        'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 group ' +
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

              <!-- Trailing padding spacer to ensure card 4 can be viewed with comfortable margin -->
              <div class="flex-shrink-0 w-24 sm:w-48 lg:w-64" aria-hidden="true"></div>
            </div>
          </div>

          <!-- Bottom Minimal Segmented Indicator Dots -->
          <div class="flex items-center justify-center gap-2 pb-2">
            @for (pillar of pillars; track pillar.id; let i = $index) {
              <div
                [class]="
                  'h-1.5 rounded-full transition-all duration-300 ' +
                  (activeIndex() === i
                    ? 'w-7 bg-[#0070F3]'
                    : 'w-2 bg-slate-300')
                "
              ></div>
            }
          </div>
        </div>
      </section>
    </div>
  `,
})
export class BrandPillarsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('trackContainer') trackContainer!: ElementRef<HTMLDivElement>;

  activeIndex = signal<number>(0);

  // High-performance 60FPS Lerp state (executed completely outside Angular Zone)
  private targetTranslateX = 0;
  private currentTranslateX = 0;
  private animationFrameId: number | null = null;
  private isDestroyed = false;

  private onScrollBound = () => this.updateTarget();
  private onResizeBound = () => this.updateTarget();

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
        'The sovereign cloud fabric that unifies ERP financial ledgers, operations, digital twins, and external APIs with enterprise guarantees and multi-region resilience.',
      statusBadge: 'Carrier-Grade SLA',
      features: [
        'Multi-Cloud Kubernetes',
        'Unified GraphQL Gateway',
        'Real-Time Event Mesh',
        'Legacy ERP Bridging',
      ],
      link: '/#zaro',
      linkText: 'Explore Cloud Fabric',
      icon: 'cloud',
    },
    {
      id: 'security',
      tag: '03 / ZERO-TRUST VAULT',
      title: 'Sovereign Compliance',
      subtitle: 'Air-Gapped Security Architecture',
      description:
        'Cryptographically enforced zero-trust network policies, role-based authorization, and automated compliance auditing for defense, aerospace, and banking institutions.',
      statusBadge: 'Air-Gapped Zero-Trust',
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
      statusBadge: 'Live Stream Telemetry',
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

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScrollBound, { passive: true });
      window.addEventListener('resize', this.onResizeBound, { passive: true });
      this.startLerpLoop();
      this.updateTarget();
    });
  }

  ngOnDestroy() {
    this.isDestroyed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('scroll', this.onScrollBound);
    window.removeEventListener('resize', this.onResizeBound);
  }

  private startLerpLoop() {
    const render = () => {
      if (this.isDestroyed) return;

      const diff = this.targetTranslateX - this.currentTranslateX;
      if (Math.abs(diff) > 0.05) {
        this.currentTranslateX += diff * 0.12;
        if (this.trackContainer?.nativeElement) {
          this.trackContainer.nativeElement.style.transform = `translate3d(${-this.currentTranslateX}px, 0, 0)`;
        }
      }

      this.animationFrameId = requestAnimationFrame(render);
    };

    this.animationFrameId = requestAnimationFrame(render);
  }

  private updateTarget() {
    if (!this.scrollContainer?.nativeElement || !this.trackContainer?.nativeElement) return;

    const container = this.scrollContainer.nativeElement;
    const track = this.trackContainer.nativeElement;
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const scrolledDistance = -rect.top;
    const maxScrollDistance = rect.height - windowHeight;

    if (maxScrollDistance <= 0) return;

    const rawProgress = Math.max(0, Math.min(scrolledDistance / maxScrollDistance, 1));
    const travelProgress = Math.min(1, rawProgress / 0.82);

    const lastCard = track.children[this.pillars.length - 1] as HTMLElement;
    let maxTranslate = 0;

    if (lastCard) {
      const containerWidth = container.clientWidth;
      const cardWidth = lastCard.offsetWidth;
      const centerOffset = Math.max(0, (containerWidth - cardWidth) / 2);
      maxTranslate = Math.max(0, lastCard.offsetLeft - centerOffset);
    } else {
      maxTranslate = Math.max(0, track.scrollWidth - container.clientWidth);
    }

    this.targetTranslateX = travelProgress * maxTranslate;

    const cardStep = 1 / this.pillars.length;
    const newIndex = Math.min(
      this.pillars.length - 1,
      Math.floor(travelProgress / cardStep + 0.1)
    );

    if (newIndex !== this.activeIndex()) {
      this.ngZone.run(() => {
        this.activeIndex.set(newIndex);
      });
    }
  }
}
