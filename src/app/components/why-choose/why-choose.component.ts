import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  template: `
    <section id="why" class="relative bg-[#051129] py-20 text-white border-t border-white/10 overflow-hidden">
      <!-- Ambient Radial Glow Orbs -->
      <div
        class="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#0070F3]/15 blur-[130px] will-change-transform"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-[#00D2FF]/10 blur-[140px] will-change-transform"
        aria-hidden="true"
      ></div>

      <!-- Subtle Cyber Matrix Blueprint Grid (Zero JS/Canvas GPU Overhead, Pure CSS) -->
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.12]"
        style="background-image: linear-gradient(to right, rgba(0, 112, 243, 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 112, 243, 0.22) 1px, transparent 1px); background-size: 52px 52px;"
        aria-hidden="true"
      ></div>
      <!-- Soft Radial Vignette for Seamless Edge Blending -->
      <div
        class="pointer-events-none absolute inset-0"
        style="background: radial-gradient(circle at 50% 50%, transparent 35%, #051129 95%);"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <!-- Left Column (5 cols): Value Proposition Checklist -->
          <div class="lg:col-span-5 space-y-6">
            <div>
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#00D2FF]">
                WHY COREZAN & ZARO
              </span>
              <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
                From Fragmented Systems to Connected Operations
              </h2>
              <p class="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Most modern enterprises struggle with disjointed software stacks, siloed departments, and untrusted public AI tools. We provide the unified architecture that fixes it.
              </p>
            </div>

            <div class="space-y-4 pt-2">
              @for (item of valueProps; track item.title) {
                <div class="flex items-start gap-3.5 group">
                  <div class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#0070F3]/20 border border-[#0070F3]/40 flex items-center justify-center text-[#00D2FF] group-hover:bg-[#0070F3] group-hover:text-white transition-colors">
                    <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-white">{{ item.title }}</h3>
                    <p class="text-xs text-slate-400 leading-relaxed mt-0.5">{{ item.desc }}</p>
                  </div>
                </div>
              }
            </div>

            <div class="pt-4">
              <a
                href="/#contact"
                class="inline-flex items-center gap-2 text-sm font-bold text-[#00D2FF] hover:text-white transition-colors group"
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
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                FEATURED DEPLOYMENTS
              </span>
              <p class="text-xs text-slate-400 mt-0.5">
                Pre-calibrated edge nodes deployed across 30+ enterprise verticals globally.
              </p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              @for (sector of deploymentSectors; track sector.id) {
                @if (sector.isHubCard) {
                  <!-- 6th Special Hub Card (All 25+ More) -->
                  <a
                    href="/#industries"
                    class="relative aspect-[4/3] rounded-xl p-4 flex flex-col justify-between border border-[#0070F3]/60 bg-gradient-to-br from-[#0B214A] to-[#071838] group cursor-pointer hover:border-[#00D2FF] hover:shadow-xl transition-all duration-300"
                  >
                    <div class="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                      <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
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
                    class="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group cursor-pointer block border border-white/10 hover:border-[#00D2FF] hover:shadow-2xl transition-all duration-300"
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
                          </svg>
                        } @else if (sector.icon === 'truck') {
                          <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                            <path d="M15 18H9" />
                            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14v10" />
                            <circle cx="17" cy="18" r="2" />
                            <circle cx="7" cy="18" r="2" />
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
      title: 'Transform raw data into real-time action',
      desc: 'High-frequency telemetry feeds converted into actionable executive & operational dashboards.',
    },
    {
      title: 'Deploy on sovereign cloud or bare metal',
      desc: 'Run multi-region cloud or air-gapped sovereign setups matching compliance laws.',
    },
    {
      title: 'Scale operations without hiring overhead',
      desc: 'Empower existing personnel with autonomous cognitive agents that handle routine logistics.',
    },
  ];

  deploymentSectors: DeploymentSector[] = [
    {
      id: 'aviation',
      title: 'Aviation & Terminals',
      tag: 'Flight Readiness',
      icon: 'plane',
      bgGradient: 'from-blue-900 to-indigo-950',
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'manufacturing',
      title: 'Smart Industry & SCADA',
      tag: 'Production Telemetry',
      icon: 'factory',
      bgGradient: 'from-slate-900 to-blue-950',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'healthcare',
      title: 'Hospital & Healthcare',
      tag: 'Diagnostic Pipelines',
      icon: 'heart',
      bgGradient: 'from-teal-950 to-slate-900',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'smart-cities',
      title: 'Smart Cities & Urban',
      tag: 'Grid Monitoring',
      icon: 'city',
      bgGradient: 'from-blue-950 to-slate-900',
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
      img.style.display = 'none';
    }
  }
}
