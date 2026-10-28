import {
  Component,
  ElementRef,
  ViewChild,
  signal,
  computed,
  HostListener,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PillarCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  features: string[];
  link: string;
  linkText: string;
  icon: 'brain' | 'cloud' | 'shield' | 'layers';
  glowColor: string;
  ambientGradient: string;
  cardBorder: string;
  badgeStyle: string;
}

@Component({
  selector: 'app-brand-pillars',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Outer Scroll Container (360vh height allows deep smooth scroll dwell) -->
    <div
      #scrollContainer
      class="relative h-[360vh] bg-[#051129]"
    >
      <!-- Sticky Viewport Locked to Screen while Scrolling Down -->
      <section
        id="pillars"
        class="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden transition-colors duration-700 ease-out select-none"
      >
        <!-- Dynamic Ambient Radial Tint that changes smoothly as cards scroll past -->
        <div
          class="pointer-events-none absolute inset-0 transition-all duration-700 ease-out"
          [style.background]="currentRadialTint()"
          aria-hidden="true"
        ></div>

        <!-- Secondary Ambient Pulsing Orbs -->
        <div
          class="pointer-events-none absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] transition-all duration-700 ease-out opacity-60"
          [style.backgroundColor]="currentGlowColor()"
          aria-hidden="true"
        ></div>
        <div
          class="pointer-events-none absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full blur-[130px] transition-all duration-700 ease-out opacity-40"
          [style.backgroundColor]="currentGlowColor()"
          aria-hidden="true"
        ></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between py-8 h-full max-h-[90vh]">
          <!-- Header (Clean top zone - removed 'scroll down to explore' pill) -->
          <div class="flex items-end justify-between gap-4 pt-2">
            <div class="space-y-2 max-w-2xl">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-white/10 text-[#00D2FF] border border-white/15 backdrop-blur-md">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
                </span>
                <span>ARCHITECTURAL SYNERGY</span>
              </div>

              <h2 class="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Four Connected Foundations.
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  Zero Operational Friction.
                </span>
              </h2>
            </div>

            <!-- Segmented Counter Pill -->
            <div class="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-slate-300 font-semibold tracking-widest shrink-0">
              <span class="text-[#00D2FF] font-bold">0{{ activeIndex() + 1 }}</span>
              <span class="opacity-40 mx-1">/</span>
              <span>0{{ pillars.length }}</span>
            </div>
          </div>

          <!-- Horizontal Cards Stage (Smooth 60fps Lerp translation) -->
          <div class="relative my-auto overflow-visible py-4">
            <div
              #trackContainer
              class="flex items-stretch gap-6 sm:gap-8 will-change-transform"
              [style.transform]="'translate3d(' + -translateX() + 'px, 0, 0)'"
            >
              @for (pillar of pillars; track pillar.id; let i = $index) {
                <div
                  [class]="
                    'flex-shrink-0 w-[82vw] sm:w-[460px] lg:w-[500px] rounded-3xl p-7 sm:p-9 border transition-all duration-500 ease-out flex flex-col justify-between relative overflow-hidden backdrop-blur-xl ' +
                    (activeIndex() === i
                      ? 'scale-100 opacity-100 shadow-2xl z-20 ' + pillar.cardBorder
                      : 'scale-[0.93] opacity-40 hover:opacity-75 z-10 border-white/10 bg-[#071838]/60')
                  "
                  [style.background]="
                    activeIndex() === i
                      ? 'linear-gradient(135deg, rgba(11,33,74,0.95) 0%, rgba(7,24,56,0.98) 100%)'
                      : 'rgba(7,24,56,0.55)'
                  "
                >
                  <!-- Card Top Glow Accent -->
                  <div
                    class="absolute top-0 left-0 right-0 h-1 transition-opacity duration-500"
                    [style.background]="
                      'linear-gradient(90deg, transparent, ' + pillar.glowColor + ', transparent)'
                    "
                    [style.opacity]="activeIndex() === i ? '1' : '0'"
                  ></div>

                  <!-- Card Header -->
                  <div class="space-y-5">
                    <div class="flex items-center justify-between">
                      <span
                        [class]="'text-xs font-mono font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full ' + pillar.badgeStyle"
                      >
                        {{ pillar.tag }}
                      </span>

                      <!-- Pillar Specific SVG Icon -->
                      <div
                        class="w-11 h-11 rounded-2xl flex items-center justify-center border"
                        [style.backgroundColor]="pillar.glowColor + '15'"
                        [style.borderColor]="pillar.glowColor + '30'"
                        [style.color]="pillar.glowColor"
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
                      <h3 class="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {{ pillar.title }}
                      </h3>
                      <div class="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wide">
                        {{ pillar.subtitle }}
                      </div>
                    </div>

                    <p class="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {{ pillar.description }}
                    </p>

                    <!-- Features Grid -->
                    <div class="grid grid-cols-2 gap-2 pt-1">
                      @for (feat of pillar.features; track feat) {
                        <div class="flex items-center gap-2 text-xs text-slate-200">
                          <span
                            class="w-1.5 h-1.5 rounded-full shrink-0"
                            [style.backgroundColor]="pillar.glowColor"
                          ></span>
                          <span class="truncate">{{ feat }}</span>
                        </div>
                      }
                    </div>
                  </div>

                  <!-- Card Footer -->
                  <div class="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div
                        class="font-mono text-xl sm:text-2xl font-bold"
                        [style.color]="pillar.glowColor"
                      >
                        {{ pillar.metric }}
                      </div>
                      <div class="text-[10px] font-mono text-slate-400 uppercase">
                        {{ pillar.metricLabel }}
                      </div>
                    </div>

                    <a
                      [href]="pillar.link"
                      class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-[#00D2FF] transition-colors group"
                    >
                      <span>{{ pillar.linkText }}</span>
                      <svg class="w-4 h-4 fill-none stroke-current stroke-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              }

              <!-- Trailing padding spacer to guarantee 4th card has breathing room -->
              <div class="flex-shrink-0 w-24 sm:w-48 lg:w-64" aria-hidden="true"></div>
            </div>
          </div>

          <!-- Bottom Minimal Active Indicator Dots -->
          <div class="flex items-center justify-center gap-2.5 pb-2">
            @for (pillar of pillars; track pillar.id; let i = $index) {
              <div
                [class]="
                  'h-2 rounded-full transition-all duration-300 ' +
                  (activeIndex() === i
                    ? 'w-8 bg-[#00D2FF] shadow-[0_0_12px_rgba(0,210,255,0.7)]'
                    : 'w-2 bg-white/20')
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
  translateX = signal<number>(0);

  // 60FPS Lerp Physics State
  private targetTranslateX = 0;
  private currentTranslateX = 0;
  private animationFrameId: number | null = null;
  private isDestroyed = false;

  pillars: PillarCard[] = [
    {
      id: 'cognitive',
      tag: '01 / COGNITIVE ENGINE',
      title: 'Corezan Cognitive AI',
      subtitle: 'Deterministic Intelligence Layer',
      description:
        'Custom private Large Language Models, domain-specific retrieval (RAG), and autonomous agent swarms engineered for high-stakes enterprise decisions without public data leak risks.',
      metric: '99.4%',
      metricLabel: 'RAG Semantic Accuracy',
      features: [
        'Private LLM Topologies',
        'Autonomous Agent Swarms',
        'Air-Gapped Vector Stores',
        'Deterministic Logic Audits',
      ],
      link: '/#corezan',
      linkText: 'Explore AI Engine',
      icon: 'brain',
      glowColor: '#0070F3',
      ambientGradient: 'radial-gradient(ellipse at 40% 50%, rgba(0, 112, 243, 0.3) 0%, rgba(5, 17, 41, 0) 70%)',
      cardBorder: 'border-[#0070F3] shadow-[0_20px_60px_-15px_rgba(0,112,243,0.35)]',
      badgeStyle: 'bg-[#0070F3]/20 text-[#00D2FF] border border-[#0070F3]/40',
    },
    {
      id: 'cloud',
      tag: '02 / EXECUTION FABRIC',
      title: 'ZARO Unified Cloud',
      subtitle: 'High-Throughput Operating Backbone',
      description:
        'The sovereign cloud fabric that unifies ERP financial ledgers, operations, digital twins, and external APIs with guaranteed sub-10ms latency and 99.99% multi-region uptime.',
      metric: '<10ms',
      metricLabel: 'Mesh Message Latency',
      features: [
        'Multi-Cloud Kubernetes',
        'Unified GraphQL Gateway',
        'Real-Time Event Mesh',
        'Legacy ERP Bridging',
      ],
      link: '/#zaro',
      linkText: 'Explore Cloud Fabric',
      icon: 'cloud',
      glowColor: '#14B8A6',
      ambientGradient: 'radial-gradient(ellipse at 50% 50%, rgba(20, 184, 166, 0.28) 0%, rgba(5, 17, 41, 0) 70%)',
      cardBorder: 'border-teal-400 shadow-[0_20px_60px_-15px_rgba(20,184,166,0.3)]',
      badgeStyle: 'bg-teal-500/20 text-teal-300 border border-teal-500/40',
    },
    {
      id: 'security',
      tag: '03 / ZERO-TRUST VAULT',
      title: 'Sovereign Compliance',
      subtitle: 'Air-Gapped Security Architecture',
      description:
        'Cryptographically enforced zero-trust network policies, role-based authorization, and automated compliance auditing for defense, aerospace, and banking institutions.',
      metric: '100%',
      metricLabel: 'Sovereign VPC Isolation',
      features: [
        'Mutual TLS (mTLS) Mesh',
        'Hardware Security Modules',
        'ISO 27001 & SOC2 Controls',
        'Immutable Audit Trail',
      ],
      link: '/#why',
      linkText: 'Inspect Security',
      icon: 'shield',
      glowColor: '#6366F1',
      ambientGradient: 'radial-gradient(ellipse at 60% 50%, rgba(99, 102, 241, 0.3) 0%, rgba(5, 17, 41, 0) 70%)',
      cardBorder: 'border-indigo-400 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.35)]',
      badgeStyle: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40',
    },
    {
      id: 'twins',
      tag: '04 / SPATIAL MIRROR',
      title: 'Real-Time Digital Twins',
      subtitle: '3D Physics & Sensory Feeds',
      description:
        'Real-time physical asset mirrors, spatial IoT visualization, high-frequency telemetry overlays, and predictive physics simulations across 30+ domain verticals.',
      metric: '60 FPS',
      metricLabel: 'Spatial Telemetry Sync',
      features: [
        'Sensor Ingestion at Scale',
        'Spatial 3D Asset Models',
        'Predictive Maintenance AI',
        'SCADA & Inductive Feeds',
      ],
      link: '/#zaro',
      linkText: 'Explore Spatial Twins',
      icon: 'layers',
      glowColor: '#0EA5E9',
      ambientGradient: 'radial-gradient(ellipse at 70% 50%, rgba(14, 165, 233, 0.28) 0%, rgba(5, 17, 41, 0) 70%)',
      cardBorder: 'border-sky-400 shadow-[0_20px_60px_-15px_rgba(14,165,233,0.3)]',
      badgeStyle: 'bg-sky-500/20 text-sky-300 border border-sky-500/40',
    },
  ];

  currentGlowColor = computed(() => {
    const idx = this.activeIndex();
    return this.pillars[idx]?.glowColor || '#0070F3';
  });

  currentRadialTint = computed(() => {
    const idx = this.activeIndex();
    return this.pillars[idx]?.ambientGradient || '';
  });

  ngAfterViewInit() {
    this.startLerpLoop();
    this.updateTarget();
  }

  ngOnDestroy() {
    this.isDestroyed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateTarget();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateTarget();
  }

  private startLerpLoop() {
    const render = () => {
      if (this.isDestroyed) return;

      // 60FPS - 120FPS smooth Lerp (Linear Interpolation) with damping factor 0.14
      const diff = this.targetTranslateX - this.currentTranslateX;
      if (Math.abs(diff) > 0.05) {
        this.currentTranslateX += diff * 0.14;
        this.translateX.set(Math.round(this.currentTranslateX * 100) / 100);
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

    // How far user has scrolled into pinned container
    const scrolledDistance = -rect.top;
    const maxScrollDistance = rect.height - windowHeight;

    if (maxScrollDistance <= 0) return;

    // Clamp progress 0 to 1
    const rawProgress = Math.max(0, Math.min(scrolledDistance / maxScrollDistance, 1));

    // Dwell Buffer:
    // 0 to 0.80 translates cards until card 4 is fully centered and visible.
    // 0.80 to 1.00 is dwell reading time so card 4 does not abruptly vanish!
    const travelProgress = Math.min(1, rawProgress / 0.82);

    // Calculate maximum travel distance so the 4th card is perfectly centered
    const lastCard = track.children[this.pillars.length - 1] as HTMLElement;
    let maxTranslate = 0;

    if (lastCard) {
      const containerWidth = container.clientWidth;
      const cardWidth = lastCard.offsetWidth;
      // Centering offset: where last card should stop so it's centered
      const centerOffset = Math.max(0, (containerWidth - cardWidth) / 2);
      maxTranslate = Math.max(0, lastCard.offsetLeft - centerOffset);
    } else {
      maxTranslate = Math.max(0, track.scrollWidth - container.clientWidth);
    }

    this.targetTranslateX = travelProgress * maxTranslate;

    // Calculate active index based on travel progress
    const cardStep = 1 / this.pillars.length;
    const calculatedIndex = Math.min(
      this.pillars.length - 1,
      Math.floor(travelProgress / cardStep + 0.1)
    );

    if (calculatedIndex !== this.activeIndex()) {
      this.activeIndex.set(calculatedIndex);
    }
  }
}
