import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="why" class="bg-white py-20 text-slate-900 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                href="#contact"
                class="inline-flex items-center gap-2 text-sm font-bold text-[#0070F3] hover:text-[#005BD0]"
              >
                <span>Read Enterprise Architecture Whitepaper</span>
                <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
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
                  <a
                    href="#industries"
                    class="aspect-[4/3] rounded-xl bg-[#071838] border border-white/10 p-5 flex flex-col justify-between hover:border-[#00D2FF]/60 transition-all group shadow-md"
                  >
                    <div class="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                      <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
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
                  <div class="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group cursor-pointer">
                    <img
                      [src]="sector.image"
                      [alt]="sector.title"
                      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

                    <div class="relative z-10 h-full p-4 flex flex-col justify-between">
                      <div class="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path d="M12 2v20M2 12h20" />
                        </svg>
                      </div>

                      <div>
                        <span class="text-[10px] font-mono text-slate-300 uppercase tracking-wider block">
                          {{ sector.tag }}
                        </span>
                        <h4 class="font-display text-sm font-bold text-white mt-0.5">
                          {{ sector.title }}
                        </h4>
                      </div>
                    </div>
                  </div>
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

  deploymentSectors = [
    {
      title: 'Aviation & Aerospace',
      tag: 'Terminal Operations',
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Advanced Manufacturing',
      tag: 'Industrial IoT',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Healthcare Networks',
      tag: 'Clinical Telemetry',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Smart Cities & Urban',
      tag: 'Grid Monitoring',
      image: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Logistics & Fleet',
      tag: 'Supply Chain',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Explore 25+ More',
      tag: 'Custom Verticals',
      isHubCard: true,
      image: '',
    },
  ];
}
