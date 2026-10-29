import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface JobPosition {
  id: string;
  title: string;
  departmentId: string;
  departmentName: string;
  location: string;
  experience: string;
  compensation: string;
  techStack: string[];
  overview: string;
  responsibilities: string[];
  qualifications: string[];
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-28 pb-24 bg-[#051129] min-h-screen text-slate-100 relative overflow-hidden">
      <!-- Ambient Radial Glow Orbs -->
      <div
        class="pointer-events-none absolute top-16 left-1/4 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#0070F3]/12 blur-[150px]"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute top-1/2 right-10 w-[550px] h-[550px] rounded-full bg-[#00D2FF]/10 blur-[160px]"
        aria-hidden="true"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <nav class="mb-8 flex items-center gap-2 text-xs text-slate-400 font-mono" aria-label="Breadcrumb">
          <a routerLink="/" class="hover:text-[#00D2FF] transition-colors">Home</a>
          <span class="text-slate-600">/</span>
          <span class="text-white font-medium">Careers & Engineering</span>
        </nav>

        <!-- Hero Section: Authentic Engineering Focus -->
        <div class="max-w-4xl mb-16 space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide bg-[#0070F3]/15 text-[#00D2FF] border border-[#0070F3]/30">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
            </span>
            <span>SYSTEMS ENGINEERING RECRUITMENT • FY 2026-27</span>
          </div>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Build High-Throughput Cloud Fabrics & Deterministic AI
          </h1>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
            We do not build thin API wrappers. At <strong class="text-white font-semibold">Corezan</strong> and <strong class="text-white font-semibold">ZARO</strong>, our engineers build distributed Raft consensus state machines, sovereign air-gapped enclaves, sub-10ms telemetry backbones, and deterministic cognitive agents for port automation, banking, and mission-critical enterprise infrastructure.
          </p>

          <!-- Engineering Specs Bar -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div class="bg-white/5 border border-white/10 rounded-xl p-3.5">
              <div class="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Latency Target</div>
              <div class="text-lg font-bold text-white font-mono mt-0.5">&lt; 10ms P99</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-xl p-3.5">
              <div class="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Telemetry Volume</div>
              <div class="text-lg font-bold text-[#00D2FF] font-mono mt-0.5">500k+ ops/sec</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-xl p-3.5">
              <div class="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Deployment Model</div>
              <div class="text-lg font-bold text-white font-mono mt-0.5">Zero-Trust Enclaves</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-xl p-3.5">
              <div class="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Engineering HQ</div>
              <div class="text-lg font-bold text-white font-mono mt-0.5">Chennai / Hybrid</div>
            </div>
          </div>
        </div>

        <!-- 4 Authentic Engineering Tenets -->
        <div class="mb-20">
          <div class="mb-6">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#0070F3]">
              ENGINEERING PHILOSOPHY
            </span>
            <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How We Build Systems
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="bg-[#071838]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-[#0070F3]/50 transition-all flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-[#0070F3]/15 border border-[#0070F3]/30 flex items-center justify-center text-[#00D2FF] mb-4 font-mono font-bold text-sm">
                  01
                </div>
                <h3 class="font-display text-base font-bold text-white mb-2">Deterministic over Stochastic</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We don't trust unconstrained LLMs with mission-critical systems. We engineer formal state-machine guards, auditable reasoning DAGs, and verifiable function execution.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-[#00D2FF]">
                LangGraph • Formal Verification • Vector RAG
              </div>
            </div>

            <div class="bg-[#071838]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-[#0070F3]/50 transition-all flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 font-mono font-bold text-sm">
                  02
                </div>
                <h3 class="font-display text-base font-bold text-white mb-2">Sub-10ms Distributed Rigor</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  ZARO's backbone runs in Rust and Go. We care about cache-locality, zero-copy serialization, eBPF network routing, and predictable tail latencies.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-teal-400">
                Rust • Go • Tokio • eBPF • Raft
              </div>
            </div>

            <div class="bg-[#071838]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-[#0070F3]/50 transition-all flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4 font-mono font-bold text-sm">
                  03
                </div>
                <h3 class="font-display text-base font-bold text-white mb-2">Sovereign Enclave Cryptography</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Enterprise tenant data never leaks to public models. We deploy isolated, air-gapped enclaves with customer-managed HSM keys and zero-knowledge proofs.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-sky-400">
                WireGuard • SPIFFE/SPIRE • HSM • Air-Gap
              </div>
            </div>

            <div class="bg-[#071838]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-[#0070F3]/50 transition-all flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 font-mono font-bold text-sm">
                  04
                </div>
                <h3 class="font-display text-base font-bold text-white mb-2">Physical Industry Empathy</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We interface with real physical infrastructure: SCADA manufacturing lines, shipping port cranes, hospital telemetry, and power grid controllers.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-amber-400">
                Modbus • OPC-UA • MQTT • TimescaleDB
              </div>
            </div>
          </div>
        </div>

        <!-- Open Roles Explorer -->
        <div id="open-roles" class="mb-20">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#0070F3]">
                CURRENT SYSTEMS OPENINGS
              </span>
              <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Open Engineering Positions
              </h2>
            </div>
            <div class="text-xs text-slate-400 font-mono">
              Showing {{ filteredPositions().length }} of {{ positions.length }} active positions
            </div>
          </div>

          <!-- Department Filter Buttons -->
          <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none" role="tablist" aria-label="Job department filters">
            @for (dept of departments; track dept.id) {
              <button
                type="button"
                (click)="selectedDept.set(dept.id)"
                [class]="
                  selectedDept() === dept.id
                    ? 'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#0070F3] text-white shadow-sm transition-all whitespace-nowrap'
                    : 'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all whitespace-nowrap'
                "
              >
                {{ dept.name }}
              </button>
            }
          </div>

          <!-- Position Cards Grid -->
          <div class="space-y-5">
            @for (job of filteredPositions(); track job.id) {
              <div class="bg-[#071838] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#0070F3]/60 hover:bg-[#0B214A]/70 transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group">
                <div class="space-y-4 max-w-3xl">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#0070F3]/20 text-[#00D2FF] border border-[#0070F3]/30">
                      {{ job.departmentName }}
                    </span>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                      {{ job.location }}
                    </span>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                      Exp: {{ job.experience }}
                    </span>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      {{ job.compensation }}
                    </span>
                  </div>

                  <div>
                    <h3 class="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                      {{ job.title }}
                    </h3>
                    <p class="text-sm text-slate-300 leading-relaxed mt-2">
                      {{ job.overview }}
                    </p>
                  </div>

                  <div class="flex flex-wrap gap-1.5 pt-1">
                    @for (tech of job.techStack; track tech) {
                      <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                        {{ tech }}
                      </span>
                    }
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 shrink-0">
                  <button
                    type="button"
                    (click)="openRoleModal(job)"
                    class="h-10 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center gap-1.5"
                  >
                    <span>View Role Spec</span>
                    <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>

                  <a
                    [href]="getApplyMailto(job)"
                    class="h-10 px-5 rounded-xl bg-[#0070F3] hover:bg-[#005BD0] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all inline-flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Apply for Role</span>
                    <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Hiring Pipeline Transparency -->
        <div class="mb-20 bg-[#071838]/60 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-md">
          <div class="max-w-2xl mb-8">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#0070F3]">
              INTERVIEW PROCESS
            </span>
            <h2 class="font-display text-2xl font-bold text-white mt-1">
              Zero Whiteboard Trivia. Pure Systems Rigor.
            </h2>
            <p class="text-sm text-slate-300 mt-2">
              We respect your time. Our 4-stage evaluation is designed by engineers to assess real distributed design, code quality, and intellectual honesty.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="space-y-2 border-l-2 border-[#0070F3] pl-4">
              <div class="text-xs font-mono text-[#00D2FF] font-semibold">STAGE 01 // 30 MIN</div>
              <h4 class="font-display text-base font-bold text-white">Technical Deep-Dive</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Conversation with a senior engineer covering systems you've built, architectural tradeoffs, and failure modes you navigated.
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-teal-500 pl-4">
              <div class="text-xs font-mono text-teal-400 font-semibold">STAGE 02 // 90 MIN</div>
              <h4 class="font-display text-base font-bold text-white">Systems Pairing</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Hands-on pairing on an actual problem: implementing a rate limiter, diagnosing a partition, or designing a deterministic RAG graph.
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-sky-500 pl-4">
              <div class="text-xs font-mono text-sky-400 font-semibold">STAGE 03 // 45 MIN</div>
              <h4 class="font-display text-base font-bold text-white">Founders & Roadmap</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Meet the engineering leadership to discuss roadmap priorities, team culture, and how you want to grow your scope.
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-emerald-500 pl-4">
              <div class="text-xs font-mono text-emerald-400 font-semibold">STAGE 04 // 48 HOURS</div>
              <h4 class="font-display text-base font-bold text-white">Decisive Offer</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                No endless deliberation loops. A transparent compensation breakdown, equity agreement, and start date within 48 hours.
              </p>
            </div>
          </div>
        </div>

        <!-- Comprehensive Perks Grid -->
        <div class="mb-20">
          <div class="mb-6">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#0070F3]">
              BENEFITS & COMPENSATIONS
            </span>
            <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Engineered for Long-Term Mastery
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div class="w-9 h-9 rounded-lg bg-[#0070F3]/20 text-[#00D2FF] flex items-center justify-center mb-3">
                <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <line x1="8" x2="16" y1="21" y2="21" />
                  <line x1="12" x2="12" y1="17" y2="21" />
                </svg>
              </div>
              <h4 class="font-display text-base font-bold text-white">Uncapped Hardware Budget</h4>
              <p class="text-xs sm:text-sm text-slate-300">
                Your choice of MacBook Pro M3 Max or 64-core Linux workstation with dual 4K monitors and ergonomic Herman Miller seating.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div class="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h4 class="font-display text-base font-bold text-white">Comprehensive Family Health</h4>
              <p class="text-xs sm:text-sm text-slate-300">
                100% employer-sponsored health insurance covering self, spouse, children, and dependent parents with zero waiting periods.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div class="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
                <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 6h10" />
                  <path d="M6 10h10" />
                </svg>
              </div>
              <h4 class="font-display text-base font-bold text-white">₹1,50,000 Learning & Travel</h4>
              <p class="text-xs sm:text-sm text-slate-300">
                Annual budget for international technical conferences (KubeCon, NeurIPS, RustConf, ICML), book allowances, and certifications.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div class="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h4 class="font-display text-base font-bold text-white">24+ Days Paid Autonomy</h4>
              <p class="text-xs sm:text-sm text-slate-300">
                Generous paid vacation, statutory festival holidays, dedicated mental wellness recharge days, and paid parental leave.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div class="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <h4 class="font-display text-base font-bold text-white">Direct Founder Equity</h4>
              <p class="text-xs sm:text-sm text-slate-300">
                Meaningful ownership in Corezan AI and ZARO Cloud with transparent 4-year vesting schedules and 1-year cliff.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div class="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h4 class="font-display text-base font-bold text-white">Hybrid Flexibility</h4>
              <p class="text-xs sm:text-sm text-slate-300">
                Work from our modern Chennai headquarters (OMR IT corridor) or sovereign remote anywhere across India with home office stipend.
              </p>
            </div>
          </div>
        </div>

        <!-- General / Unlisted Inquiries Box -->
        <div class="bg-gradient-to-r from-[#0B214A] to-[#071838] border border-white/10 rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-5">
          <div class="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#00D2FF] mx-auto">
            <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>

          <div class="space-y-2">
            <h2 class="font-display text-2xl font-bold text-white">Don't See Your Exact Role?</h2>
            <p class="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              We frequently create bespoke roles for exceptional systems builders, compiler writers, and machine learning researchers. Reach out directly to our engineering leads.
            </p>
          </div>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:careers@corezan.ai?subject=General Systems Engineering Inquiry&body=Hi Corezan and ZARO Team,%0D%0A%0D%0AI am a systems engineer interested in exploring opportunities.%0D%0A%0D%0AMy GitHub/Portfolio: %0D%0AMy Core Focus (Rust / Distributed / AI / Frontend / SCADA): %0D%0AAttached Resume / Bio:"
              class="inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-xl h-11 px-6 bg-[#0070F3] hover:bg-[#005BD0] text-white shadow-md shadow-[#0070F3]/25 transition-all group"
            >
              <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Email careers&#64;corezan.ai</span>
            </a>

            <a
              href="tel:+919940397098"
              class="inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-xl h-11 px-6 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
            >
              <svg class="w-4 h-4 text-[#00D2FF] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 99403 97098</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Slide-Over Drawer for Role Specification -->
      @if (selectedJob(); as job) {
        <div class="fixed inset-0 z-[110] flex justify-end" role="dialog" aria-modal="true" [attr.aria-label]="job.title">
          <!-- Backdrop -->
          <div
            class="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            (click)="closeRoleModal()"
          ></div>

          <!-- Drawer Container -->
          <div class="relative w-full max-w-2xl bg-[#071838] border-l border-white/10 h-full p-6 sm:p-8 overflow-y-auto z-10 shadow-2xl flex flex-col justify-between">
            <div class="space-y-6">
              <!-- Drawer Header -->
              <div class="flex items-start justify-between pb-4 border-b border-white/10">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#0070F3]/20 text-[#00D2FF]">
                      {{ job.departmentName }}
                    </span>
                    <span class="text-xs font-mono text-slate-400">ID: {{ job.id }}</span>
                  </div>
                  <h3 class="font-display text-2xl font-bold text-white mt-1">
                    {{ job.title }}
                  </h3>
                  <div class="text-xs text-slate-400 font-mono flex items-center gap-3 pt-1">
                    <span>{{ job.location }}</span>
                    <span>•</span>
                    <span>{{ job.experience }} experience</span>
                    <span>•</span>
                    <span class="text-emerald-400">{{ job.compensation }}</span>
                  </div>
                </div>

                <button
                  type="button"
                  (click)="closeRoleModal()"
                  class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Tech Stack Tags -->
              <div>
                <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">Core Technologies</h4>
                <div class="flex flex-wrap gap-1.5">
                  @for (tech of job.techStack; track tech) {
                    <span class="text-xs font-mono px-3 py-1 rounded bg-[#0B214A] text-[#00D2FF] border border-[#0070F3]/30">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>

              <!-- Role Mission -->
              <div class="space-y-2">
                <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Architectural Mission</h4>
                <p class="text-sm text-slate-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                  {{ job.overview }}
                </p>
              </div>

              <!-- Key Responsibilities -->
              <div class="space-y-2">
                <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">What You Will Build</h4>
                <ul class="space-y-2 text-sm text-slate-300">
                  @for (resp of job.responsibilities; track resp) {
                    <li class="flex items-start gap-2.5">
                      <span class="text-[#00D2FF] mt-1 shrink-0">▹</span>
                      <span>{{ resp }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- Required Qualifications -->
              <div class="space-y-2">
                <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Technical Rigor Required</h4>
                <ul class="space-y-2 text-sm text-slate-300">
                  @for (qual of job.qualifications; track qual) {
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-400 mt-1 shrink-0">✓</span>
                      <span>{{ qual }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>

            <!-- Drawer Bottom CTA -->
            <div class="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                [href]="getApplyMailto(job)"
                class="w-full sm:flex-1 h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0070F3] hover:bg-[#005BD0] text-white font-semibold text-sm shadow-md transition-all"
              >
                <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Direct Apply: careers&#64;corezan.ai</span>
              </a>

              <button
                type="button"
                (click)="closeRoleModal()"
                class="w-full sm:w-auto h-11 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-semibold transition-all"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  `,
})
export class CareersComponent implements OnInit {
  selectedDept = signal<string>('all');
  selectedJob = signal<JobPosition | null>(null);

  departments = [
    { id: 'all', name: 'All Openings' },
    { id: 'distributed', name: 'Distributed Systems & Cloud' },
    { id: 'ai', name: 'Core AI & Cognitive Systems' },
    { id: 'frontend', name: 'Frontend Architecture' },
    { id: 'solutions', name: 'Industrial & SCADA Solutions' },
  ];

  positions: JobPosition[] = [
    {
      id: 'dist-sys-architect',
      title: 'Principal Distributed Systems Architect (Rust / Go)',
      departmentId: 'distributed',
      departmentName: 'Distributed Systems & Cloud',
      location: 'Chennai / Hybrid (OMR)',
      experience: '7+ Years',
      compensation: 'Top 1% Market + Equity',
      techStack: ['Rust', 'Go', 'Raft Consensus', 'eBPF', 'Tokio', 'Kubernetes'],
      overview: 'Lead the design of ZARO Cloud core replication engine, optimizing multi-region state machines with sub-5ms commit latency under 500,000+ operations/second.',
      responsibilities: [
        'Architect high-throughput partitioned log consensus clusters operating across hybrid multi-cloud and bare-metal enclaves.',
        'Implement zero-copy serialization and kernel-bypass network telemetry with eBPF and io_uring.',
        'Partner with enterprise security teams to guarantee cryptographic isolation across sovereign tenant partitions.',
        'Conduct chaotic partition recovery simulations and benchmark p99 tail latencies under adversarial load.',
      ],
      qualifications: [
        'Extensive experience with systems-level Rust or Go in distributed production backbones.',
        'Deep mastery of distributed consensus protocols (Raft, Paxos, Multi-Paxos) and replication topologies.',
        'Strong intuition for Linux kernel networking, memory allocators, CPU cache coherence, and profiling.',
      ],
    },
    {
      id: 'rag-cognitive-researcher',
      title: 'Lead Cognitive Systems & RAG Alignment Researcher',
      departmentId: 'ai',
      departmentName: 'Core AI & Cognitive Systems',
      location: 'Chennai / Hybrid (OMR)',
      experience: '4+ Years',
      compensation: 'Top Tier + Research Stipend + Equity',
      techStack: ['PyTorch', 'Triton', 'vLLM', 'Vector DBs (Qdrant)', 'LangGraph', 'Llama-3/Mistral'],
      overview: 'Architect deterministic enterprise intelligence topologies with Corezan AI, replacing stochastic hallucination with auditable state-machine reasoning DAGs.',
      responsibilities: [
        'Fine-tune domain-specific foundational models (7B-70B parameters) using QLoRA and continuous reinforcement alignment.',
        'Engineer hybrid dense/sparse vector retrieval pipelines with reciprocal rank fusion (RRF) and dynamic semantic reranking.',
        'Implement deterministic tool-calling runtimes with strict schema validation for enterprise ERP and SCADA execution.',
        'Publish novel systems research on private sovereign model quantization and sub-millisecond embedding index trees.',
      ],
      qualifications: [
        'Track record deploying enterprise-grade RAG and agentic execution graphs in production environments.',
        'In-depth knowledge of PyTorch, CUDA kernel optimization, Triton, and high-performance inference servers (vLLM, TensorRT-LLM).',
        'Demonstrated ability to eliminate hallucination in domain-critical mathematical and operational workflows.',
      ],
    },
    {
      id: 'frontend-systems-architect',
      title: 'Senior Frontend Systems Engineer (Angular 19 & WebGL)',
      departmentId: 'frontend',
      departmentName: 'Frontend Architecture',
      location: 'Chennai / Hybrid (OMR)',
      experience: '4+ Years',
      compensation: 'Top 5% Market + Equity',
      techStack: ['Angular 19', 'Signals & RxJS', 'TypeScript 5', 'Tailwind CSS', 'WebGL / Three.js', 'Canvas'],
      overview: 'Engineer real-time industrial telemetry visualizers and sovereign cloud control planes rendering 50,000+ concurrent telemetry nodes at steady 60 FPS.',
      responsibilities: [
        'Design responsive, ultra-clean standalone Angular architectures leveraging modern fine-grained Signals and computed primitives.',
        'Build custom WebGL and 2D Canvas renderers for live industrial sensor graphs, logistics routes, and cloud mesh topology maps.',
        'Eliminate UI thread jank, profiling memory footprints, dom recycling, and bundle splitting down to sub-100kb chunks.',
        'Maintain pixel-level enterprise aesthetic standards following high-contrast dark mode and ergonomic design systems.',
      ],
      qualifications: [
        'Exceptional command of modern Angular (Signals, Standalone Components, defer blocks, hydration) and modern CSS.',
        'Demonstrated proficiency with hardware-accelerated graphics (WebGL, Canvas API, or SVG graph layouts).',
        'Uncompromising dedication to visual precision, typography, micro-interactions, and accessibility standards.',
      ],
    },
    {
      id: 'zero-trust-cloud-architect',
      title: 'Sovereign Cloud & Zero-Trust Security Architect',
      departmentId: 'distributed',
      departmentName: 'Distributed Systems & Cloud',
      location: 'Remote (India) / Chennai',
      experience: '6+ Years',
      compensation: 'Top 1% Market + Equity',
      techStack: ['WireGuard', 'SPIFFE / SPIRE', 'HashiCorp Vault', 'mTLS', 'Terraform', 'eBPF'],
      overview: 'Engineer sovereign VPC isolation, cryptographic identity issuance, and compliance fabrics across sovereign banking and defense clients globally.',
      responsibilities: [
        'Construct automated air-gapped deployment meshes with automated cryptographic attestation via SPIRE and Hardware Security Modules.',
        'Architect zero-trust overlay networks with WireGuard and automated dynamic mTLS certificate rotation.',
        'Enforce continuous compliance automation for SOC2 Type II, ISO 27001, and regional data sovereignty mandates.',
        'Lead threat-modeling audits and red-team penetration simulations against distributed cloud edge nodes.',
      ],
      qualifications: [
        'Deep practical expertise in zero-trust network architectures, cryptosystems, and sovereign infrastructure deployment.',
        'Hands-on mastery of Terraform, Kubernetes security policies, Cilium eBPF, and identity federations.',
        'Experience meeting strict regulatory data sovereignty standards in finance, healthcare, or government sectors.',
      ],
    },
    {
      id: 'industrial-scada-lead',
      title: 'Industrial Systems & SCADA Integration Lead',
      departmentId: 'solutions',
      departmentName: 'Industrial & SCADA Solutions',
      location: 'Chennai / Field Hybrid',
      experience: '5+ Years',
      compensation: 'Competitive + Field Allowances + Equity',
      techStack: ['Modbus TCP', 'OPC-UA', 'MQTT', 'Apache Kafka', 'TimescaleDB / ClickHouse', 'C++ / Python'],
      overview: 'Bridge physical industrial machinery, smart factory lines, and port logistics into the real-time ZARO Virtual World and Corezan AI predictive dispatch loop.',
      responsibilities: [
        'Integrate edge IoT gateways communicating with PLC and SCADA controllers over Modbus, Profinet, and OPC-UA protocols.',
        'Build fault-tolerant ingestion pipelines capable of absorbing millions of sensor signals with intermittent edge connectivity.',
        'Collaborate with on-site factory automation teams to calibrate predictive anomaly models for heavy machinery.',
        'Implement safety-interlock logic ensuring AI optimization recommendations comply with physical fail-safe regulations.',
      ],
      qualifications: [
        'Direct experience deploying hardware and software integrations in manufacturing, utilities, or logistics environments.',
        'Deep familiarity with industrial telemetry protocols (OPC-UA, Modbus, MQTT Sparkplug B) and time-series datastores.',
        'Strong problem-solving ability in high-stakes operational settings with zero margin for factory downtime.',
      ],
    },
  ];

  filteredPositions = computed(() => {
    const dept = this.selectedDept();
    if (dept === 'all') {
      return this.positions;
    }
    return this.positions.filter((p) => p.departmentId === dept);
  });

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openRoleModal(job: JobPosition) {
    this.selectedJob.set(job);
  }

  closeRoleModal() {
    this.selectedJob.set(null);
  }

  getApplyMailto(job: JobPosition): string {
    const subject = encodeURIComponent(`Application: ${job.title} (Ref: ${job.id})`);
    const body = encodeURIComponent(
      `Dear Corezan & ZARO Engineering Team,\n\n` +
      `I am applying for the position of ${job.title}.\n\n` +
      `Name: \n` +
      `GitHub / Portfolio / Architecture Links: \n` +
      `Current Role & Location: \n` +
      `Relevant Systems Experience:\n\n` +
      `[Attached Resume / CV]\n`
    );
    return `mailto:careers@corezan.ai?subject=${subject}&body=${body}`;
  }
}
