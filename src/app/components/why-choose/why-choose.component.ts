import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShapeGridComponent } from '../shape-grid/shape-grid.component';

export interface DeploymentSector {
  id: string;
  title: string;
  tag: string;
  icon: 'plane' | 'factory' | 'heart' | 'city' | 'truck' | 'more';
  image?: string;
  bgGradient: string;
  isHubCard?: boolean;
}

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule, ShapeGridComponent],
  template: `
    <section id="why" class="relative bg-gradient-to-b from-[#F3F8FF] via-white to-[#F0F6FF] py-20 text-slate-900 border-t border-slate-200 overflow-hidden">
      <!-- Ambient Blue Glow Orbs to blend with blue theme -->
      <div class="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[120px]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/3 w-[550px] h-[550px] rounded-full bg-sky-100/40 blur-[130px]" aria-hidden="true"></div>

      <!-- Perspective ShapeGrid Interactive Canvas Background -->
      <div class="absolute inset-0 pointer-events-none z-0 opacity-80">
        <app-shape-grid
          shape="square"
          direction="right"
          lineColor="rgba(0, 112, 243, 0.14)"
          hoverColor="#0070F3"
          hoverFillColor="#00D2FF"
          [fillOpacity]="0.15"
          [cellSize]="48"
          [speed]="0.35"
          [tiltX]="0"
          [tiltY]="-18"
          [rainbow]="false"
          [radius]="1.3"
          [glow]="0.35"
        />
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <!-- Left Column (5 cols): Value Proposition Checklist -->
          <div class="lg:col-span-5 space-y-6">
            <div>
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#0070F3]">
                WHY COREZAN & ZARO
              </span>
              <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
                From Fragmented Systems to Connected Operations
              </h2>
              <p class="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Most modern enterprises struggle with disjointed software stacks, siloed departments, and untrusted public AI tools. We provide the unified architecture that fixes it.
              </p>
            </div>

            <div class="space-y-4 pt-2">
              @for (item of valueProps; track item.title) {
                <div class="flex items-start gap-3.5 group">
                  <div class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#0070F3]/10 border border-[#0070F3]/30 flex items-center justify-center text-[#0070F3] group-hover:bg-[#0070F3] group-hover:text-white transition-colors">
                    <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">{{ item.title }}</h3>
                    <p class="text-xs text-slate-600 leading-relaxed mt-0.5">{{ item.desc }}</p>
                  </div>
                </div>
              }
            </div>

            <div class="pt-4">
              <a
                href="/#contact"
                class="inline-flex items-center gap-2 text-sm font-bold text-[#0070F3] hover:text-[#005BD0] group"
              >
                <span>Read Enterprise Architecture Whitepaper</span>
                <svg class="w-4 h-4 fill-none stroke-current stroke-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Right Column (7 cols): 2x3 Photo Deployment Grid -->
          <div class="lg:col-span-7 space-y-4">
            <div>
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                FEATURED DEPLOYMENTS
              </span>
              <h3 class="font-display text-2xl font-bold text-slate-900 mt-1">
                One Platform. Multiple Mission-Critical Industries.
              </h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              @for (sector of deploymentSectors; track sector.title) {
                @if (sector.isHubCard) {
                  <!-- More Industries Hub Card -->
                  <a
                    href="/#industries"
                    class="aspect-[4/3] rounded-xl bg-[#071838] border border-white/10 p-5 flex flex-col justify-between hover:border-[#00D2FF]/60 hover:bg-[#0B214A] transition-all group shadow-md"
                  >
                    <div class="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                      <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                      </svg>
                    </div>

                    <div>
                      <span class="text-[10px] font-mono text-[#00D2FF] uppercase tracking-wider">
                        {{ sector.tag }}
                      </span>
                      <h4 class="font-display text-base font-bold text-white mt-0.5 flex items-center justify-between">
                        <span>{{ sector.title }}</span>
                        <svg class="w-4 h-4 text-[#00D2FF] group-hover:translate-x-1 transition-transform fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </h4>
                    </div>
                  </a>
                } @else {
                  <!-- Photography Deployment Card -->
                  <a
                    href="/#industries"
                    class="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group cursor-pointer block border border-slate-200 hover:border-[#0070F3] hover:shadow-xl transition-all duration-300"
                  >
                    <!-- Fallback Background Gradient in case image is loading or blocked -->
                    <div
                      [class]="'absolute inset-0 bg-gradient-to-br ' + sector.bgGradient"
                      aria-hidden="true"
                    ></div>

                    <!-- Image with no-referrer & async decoding -->
                    @if (sector.image) {
                      <img
                        [src]="sector.image"
                        [alt]="sector.title"
                        loading="lazy"
                        decoding="async"
                        referrerpolicy="no-referrer"
                        (error)="handleImageError($event)"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    }

                    <!-- High-contrast Gradient Overlay for crisp text legibility -->
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent"></div>

                    <!-- Card Content Overlay -->
                    <div class="relative z-10 h-full p-4 flex flex-col justify-between">
                      <div class="w-8 h-8 rounded-lg bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-sm group-hover:border-[#00D2FF]/60 transition-colors">
                        @if (sector.icon === 'plane') {
                          <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                          </svg>
                        } @else if (sector.icon === 'factory') {
                          <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2z" />
                          </svg>
                        } @else if (sector.icon === 'heart') {
                          <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          </svg>
                        } @else if (sector.icon === 'city') {
                          <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                            <path d="M6 12H4a2 2 0 0 0-2 2v8h4" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v11h-4" />
                            <path d="M10 6h4" />
                            <path d="M10 10h4" />
                            <path d="M10 14h4" />
                          </svg>
                        } @else if (sector.icon === 'truck') {
                          <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                            <path d="M15 18H9" />
                            <path d="M19 18h2a1 1 0 0 0 1-1v-5l-3-4h-5v10Z" />
                            <circle cx="7" cy="18" r="2" />
                            <circle cx="17" cy="18" r="2" />
                          </svg>
                        }
                      </div>

                      <div>
                        <span class="text-[10px] font-mono text-slate-300 uppercase tracking-wider block">
                          {{ sector.tag }}
                        </span>
                        <h4 class="font-display text-sm font-bold text-white mt-0.5 flex items-center justify-between">
                          <span>{{ sector.title }}</span>
                          <svg class="w-3.5 h-3.5 text-[#00D2FF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </h4>
                      </div>
                    </div>
                  </a>
                }
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class WhyChooseComponent {
  valueProps = [
    {
      title: 'Automate repetitive enterprise workflows',
      desc: 'Remove human error from recurring data reconciliations and cross-system approvals.',
    },
    {
      title: 'Connect applications via unified APIs',
      desc: 'Eliminate siloed point-to-point spaghetti code with standard GraphQL & event meshes.',
    },
    {
      title: 'Centralize operational telemetry & data',
      desc: 'Real-time visibility across physical devices, ERP tables, and third-party SaaS.',
    },
    {
      title: 'Deploy hardened, sovereign cloud infrastructure',
      desc: 'Multi-cloud Kubernetes clusters with air-gapped compliance and sub-10ms response.',
    },
    {
      title: 'Embed production-ready private AI models',
      desc: 'Zero dependency on public LLMs; guaranteed data privacy and auditable deterministic outputs.',
    },
  ];

  deploymentSectors: DeploymentSector[] = [
    {
      id: 'aviation',
      title: 'Aviation & Aerospace',
      tag: 'Terminal Operations',
      icon: 'plane',
      bgGradient: 'from-sky-900 to-slate-900',
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'manufacturing',
      title: 'Advanced Manufacturing',
      tag: 'Industrial IoT',
      icon: 'factory',
      bgGradient: 'from-blue-900 to-slate-900',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'healthcare',
      title: 'Healthcare Networks',
      tag: 'Clinical Telemetry',
      icon: 'heart',
      bgGradient: 'from-teal-900 to-slate-900',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'smart-cities',
      title: 'Smart Cities & Urban',
      tag: 'Grid Monitoring',
      icon: 'city',
      bgGradient: 'from-blue-950 to-slate-900',
      // High-resolution reliable smart city skyline
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'logistics',
      title: 'Logistics & Fleet',
      tag: 'Supply Chain',
      icon: 'truck',
      bgGradient: 'from-amber-950 to-slate-900',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'more',
      title: 'Explore 25+ More',
      tag: 'Custom Verticals',
      icon: 'more',
      bgGradient: 'from-slate-900 to-brand-navy-card',
      isHubCard: true,
    },
  ];

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      // Hide broken image so the rich fallback gradient and icon are displayed seamlessly
      img.style.display = 'none';
    }
  }
}
