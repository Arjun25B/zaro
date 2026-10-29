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
    <!-- Outer Scroll Track (Calibrated to 220vh for seamless pacing without trailing dead space) -->
    <div
      #scrollContainer
      class="relative h-[220vh] bg-white"
    >
      <!-- Sticky Viewport: Pins cleanly while user scrolls vertically -->
      <section
        id="pillars"
        class="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-white border-t border-b border-slate-200 select-none"
      >
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between py-6 sm:py-8 h-full max-h-[88vh]">
          <!-- Top Header & Pillar Counter -->
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

          <!-- Horizontal Cards Track: Driven smoothly by vertical page scroll -->
          <div class="relative my-auto overflow-visible py-4">
            <div
              #trackContainer
              class="flex items-stretch gap-6 sm:gap-8 will-change-transform"
            >
              @for (pillar of pillars; track pillar.id; let i = $index) {
                <div
                  [class]="
                    'flex-shrink-0 w-[82vw] sm:w-[460px] lg:w-[490px] rounded-3xl p-7 sm:p-9 border flex flex-col justify-between relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ' +
                    (activeIndex() === i
                      ? 'text-white border-[#0070F3] shadow-[0_20px_50px_-10px_rgba(0,112,243,0.32)] ring-1 ring-[#00D2FF]/40 opacity-100 scale-100 z-20'
                      : 'border-slate-200/90 text-slate-800 shadow-sm opacity-55 hover:opacity-75 scale-[0.96] z-10')
                  "
                >
                  <!-- Dual Background Layers for Silky Smooth 700ms Opacity Cross-Fade -->
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

                    <!-- 4 Architecture Features Checklist -->
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

              <!-- Trailing padding spacer to ensure Card 4 is centered comfortably -->
              <div class="flex-shrink-0 w-16 sm:w-32 lg:w-48" aria-hidden="true"></div>
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
  private maxTranslate = 0;
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
        this.currentTranslateX += diff * 0.10;

        if (this.maxTranslate > 0) {
          const visualProgress = Math.max(0, Math.min(1, this.currentTranslateX / this.maxTranslate));
          const newIndex = Math.min(
            this.pillars.length - 1,
            Math.max(0, Math.round(visualProgress * (this.pillars.length - 1)))
          );

          if (newIndex !== this.activeIndex()) {
            this.ngZone.run(() => {
              this.activeIndex.set(newIndex);
            });
          }
        }

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

    // Linear progression across full scroll range
    const rawProgress = Math.max(0, Math.min(scrolledDistance / maxScrollDistance, 1));
    const travelProgress = rawProgress;

    const lastCard = track.children[this.pillars.length - 1] as HTMLElement;
    this.maxTranslate = 0;

    if (lastCard) {
      const containerWidth = container.clientWidth;
      const cardWidth = lastCard.offsetWidth;
      const centerOffset = Math.max(0, (containerWidth - cardWidth) / 2);
      this.maxTranslate = Math.max(0, lastCard.offsetLeft - centerOffset);
    } else {
      this.maxTranslate = Math.max(0, track.scrollWidth - container.clientWidth);
    }

    this.targetTranslateX = travelProgress * this.maxTranslate;
  }
}
