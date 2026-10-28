import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-28 pb-20 bg-[#051129] min-h-screen text-slate-100 relative overflow-hidden">
      <!-- Ambient Glow Orbs -->
      <div
        class="pointer-events-none absolute top-20 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#0070F3]/10 blur-[130px]"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full bg-[#00D2FF]/10 blur-[140px]"
        aria-hidden="true"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumb & Header -->
        <div class="mb-8 flex items-center gap-2 text-xs text-slate-400 font-mono">
          <a routerLink="/" class="hover:text-[#00D2FF] transition-colors">Home</a>
          <span>/</span>
          <span class="text-white">Careers</span>
        </div>

        <div class="max-w-3xl mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide bg-[#0070F3]/15 text-[#00D2FF] border border-[#0070F3]/30">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
            </span>
            <span>We are Hiring</span>
          </div>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Build the Future of Enterprise AI & Cloud Systems
          </h1>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Join our engineering, research, and product teams building next-generation cognitive models with <strong class="text-white font-semibold">Corezan</strong> and resilient cloud architecture on <strong class="text-white font-semibold">ZARO</strong>.
          </p>
        </div>

        <!-- Why Join Us Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div class="bg-[#071838]/80 border border-white/10 rounded-2xl p-7 backdrop-blur-md hover:border-[#0070F3]/50 transition-all">
            <div class="w-12 h-12 rounded-xl bg-[#0070F3]/10 border border-[#0070F3]/20 flex items-center justify-center text-[#00D2FF] mb-5">
              <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h2 class="font-display text-lg font-bold text-white mb-2">High Impact Systems</h2>
            <p class="text-sm text-slate-300 leading-relaxed">
              Work on mission-critical deployments across 30+ enterprise verticals, from smart aviation terminals to predictive industrial manufacturing.
            </p>
          </div>

          <div class="bg-[#071838]/80 border border-white/10 rounded-2xl p-7 backdrop-blur-md hover:border-[#0070F3]/50 transition-all">
            <div class="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5">
              <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="m9 9 6 6m0-6-6 6" />
              </svg>
            </div>
            <h2 class="font-display text-lg font-bold text-white mb-2">Cutting-Edge Tech Stack</h2>
            <p class="text-sm text-slate-300 leading-relaxed">
              Build with modern Angular, TypeScript, Rust, private LLM topologies, sub-10ms GraphQL meshes, and multi-region Kubernetes clusters.
            </p>
          </div>

          <div class="bg-[#071838]/80 border border-white/10 rounded-2xl p-7 backdrop-blur-md hover:border-[#0070F3]/50 transition-all">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5">
              <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h2 class="font-display text-lg font-bold text-white mb-2">Growth & Flexibility</h2>
            <p class="text-sm text-slate-300 leading-relaxed">
              Competitive compensation, comprehensive health insurance, flexible remote/hybrid options, and dedicated time for foundational research.
            </p>
          </div>
        </div>

        <!-- Open Positions Section -->
        <div class="mb-16">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#0070F3]">
                CURRENT OPENINGS
              </span>
              <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Explore Available Roles
              </h2>
            </div>
            <div class="text-xs text-slate-400 font-mono">
              {{ positions.length }} Open Positions
            </div>
          </div>

          <div class="space-y-4">
            @for (job of positions; track job.id) {
              <div class="bg-[#071838] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#0070F3]/50 hover:bg-[#0B214A]/70 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                <div class="space-y-3 max-w-2xl">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#0070F3]/20 text-[#00D2FF]">
                      {{ job.department }}
                    </span>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                      {{ job.location }}
                    </span>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                      {{ job.type }}
                    </span>
                  </div>

                  <h3 class="font-display text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                    {{ job.title }}
                  </h3>

                  <p class="text-sm text-slate-300 leading-relaxed">
                    {{ job.description }}
                  </p>

                  <div class="flex flex-wrap gap-1.5 pt-1">
                    @for (req of job.requirements; track req) {
                      <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        {{ req }}
                      </span>
                    }
                  </div>
                </div>

                <div class="flex-shrink-0">
                  <a
                    [href]="'mailto:careers@corezan.ai?subject=Application for ' + job.title"
                    class="inline-flex items-center justify-center font-semibold text-xs rounded-full h-11 px-6 bg-[#0070F3] hover:bg-[#005BD0] text-white shadow-md shadow-[#0070F3]/25 transition-all"
                  >
                    <span>Apply for Role</span>
                    <svg class="w-3.5 h-3.5 ml-2 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- General Application Box -->
        <div class="bg-gradient-to-r from-[#0B214A] to-[#071838] border border-white/10 rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-4">
          <div class="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#00D2FF] mx-auto">
            <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <rect width="20" height="16" x="2" y="4" rx="2" />
            </svg>
          </div>

          <h2 class="font-display text-2xl font-bold text-white">Don't See Your Role?</h2>
          <p class="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            We are always eager to meet talented engineers, researchers, and domain architects. Send your resume and portfolio directly to our talent team.
          </p>

          <div class="pt-2">
            <a
              href="mailto:careers@corezan.ai?subject=General Application / Talent Inquiry"
              class="inline-flex items-center justify-center font-semibold text-sm rounded-full h-11 px-8 bg-gradient-to-r from-[#0070F3] to-[#00D2FF] text-white shadow-lg shadow-[#0070F3]/25 hover:opacity-95 transition-all"
            >
              <span>Email careers&#64;corezan.ai</span>
              <svg class="w-4 h-4 ml-2 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CareersComponent {
  positions: JobPosition[] = [
    {
      id: 'ai-ml-engineer',
      title: 'AI / Machine Learning Research Engineer',
      department: 'Corezan AI Research',
      location: 'Chennai / Hybrid',
      type: 'Full-time',
      description: 'Design and fine-tune private domain-specific LLMs, retrieval-augmented systems (RAG), and deterministic cognitive agents for enterprise clients.',
      requirements: ['PyTorch / JAX', 'Transformers & Vector DBs', 'RAG Topologies', 'Python / C++'],
    },
    {
      id: 'fullstack-engineer',
      title: 'Senior Full-Stack Engineer (Angular & Cloud)',
      department: 'Platform Engineering',
      location: 'Chennai / Hybrid',
      type: 'Full-time',
      description: 'Architect performant user interfaces with Angular and TypeScript, integrating high-throughput microservices and real-time telemetry dashboards.',
      requirements: ['Angular 18+ / Signals', 'TypeScript', 'Tailwind CSS', 'Node.js / GraphQL'],
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Infrastructure & Zero-Trust Architect',
      department: 'ZARO Cloud Infrastructure',
      location: 'Remote / India',
      type: 'Full-time',
      description: 'Lead multi-region sovereign cloud deployments, Kubernetes mesh orchestration, and air-gapped enterprise compliance architectures.',
      requirements: ['Kubernetes / Istio', 'Terraform', 'Multi-Cloud (AWS/GCP/Azure)', 'mTLS & Zero-Trust'],
    },
    {
      id: 'solutions-consultant',
      title: 'Enterprise Solutions Architect',
      department: 'Customer Engineering',
      location: 'Chennai / Hybrid',
      type: 'Full-time',
      description: 'Partner with enterprise executives and technical teams to scope custom AI pipelines, ERP integrations, and 30+ domain vertical architectures.',
      requirements: ['Technical Pre-Sales', 'System Architecture', 'Enterprise ERP / APIs', 'Client Communication'],
    },
  ];
}
