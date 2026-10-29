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
  type: string;
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
    <div class="pt-28 pb-20 bg-[#051129] min-h-screen text-slate-100 relative overflow-hidden">
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
          <span class="text-white font-medium">Careers</span>
        </nav>

        <!-- Clean, Minimal Hero Section -->
        <div class="max-w-3xl mb-14 space-y-4">
          <div class="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide bg-[#0070F3]/15 text-[#00D2FF] border border-[#0070F3]/30">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
            </span>
            <span>WE ARE HIRING</span>
          </div>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Build the Future with Us
          </h1>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Join our team building practical enterprise AI solutions with <strong class="text-white font-semibold">Corezan</strong> and modern connected cloud infrastructure on <strong class="text-white font-semibold">ZARO</strong>.
          </p>
        </div>

        <!-- Open Roles Explorer -->
        <div id="open-roles" class="mb-20">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#0070F3]">
                OPEN POSITIONS
              </span>
              <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Explore Available Roles
              </h2>
            </div>
            <div class="text-xs text-slate-400 font-mono">
              {{ positions.length }} Active Openings
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

          <!-- Position Cards Grid (4 Clean, Realistic Roles) -->
          <div class="space-y-4">
            @for (job of filteredPositions(); track job.id) {
              <div class="bg-[#071838] border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-[#0070F3]/60 hover:bg-[#0B214A]/70 transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group">
                <div class="space-y-3 max-w-3xl">
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
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                      {{ job.type }}
                    </span>
                  </div>

                  <div>
                    <h3 class="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                      {{ job.title }}
                    </h3>
                    <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
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
                    <span>View Details</span>
                    <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>

                  <a
                    [href]="getApplyMailto(job)"
                    class="h-10 px-5 rounded-xl bg-[#0070F3] hover:bg-[#005BD0] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all inline-flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Apply Now</span>
                    <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Clean 4-Step Hiring Process -->
        <div class="mb-20 bg-[#071838]/60 border border-white/10 rounded-2xl p-7 sm:p-9 backdrop-blur-md">
          <div class="max-w-xl mb-7">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#0070F3]">
              HIRING PROCESS
            </span>
            <h2 class="font-display text-xl sm:text-2xl font-bold text-white mt-1">
              Simple, Transparent Steps
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="space-y-1.5 border-l-2 border-[#0070F3] pl-4">
              <div class="text-xs font-mono text-[#00D2FF] font-semibold">STEP 01</div>
              <h4 class="font-display text-sm font-bold text-white">Application Review</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                We review your resume, code samples, and previous experience within 2-3 business days.
              </p>
            </div>

            <div class="space-y-1.5 border-l-2 border-teal-500 pl-4">
              <div class="text-xs font-mono text-teal-400 font-semibold">STEP 02</div>
              <h4 class="font-display text-sm font-bold text-white">Technical Discussion</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                A 30-minute conversation with a lead engineer on projects you've worked on and problem solving.
              </p>
            </div>

            <div class="space-y-1.5 border-l-2 border-sky-500 pl-4">
              <div class="text-xs font-mono text-sky-400 font-semibold">STEP 03</div>
              <h4 class="font-display text-sm font-bold text-white">Practical Pairing</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                A collaborative hands-on coding or system design exercise focused on real-world engineering tasks.
              </p>
            </div>

            <div class="space-y-1.5 border-l-2 border-emerald-500 pl-4">
              <div class="text-xs font-mono text-emerald-400 font-semibold">STEP 04</div>
              <h4 class="font-display text-sm font-bold text-white">Offer & Onboarding</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Final conversation with founders, transparent offer package, and clear start date timeline.
              </p>
            </div>
          </div>
        </div>

        <!-- General Inquiries Box -->
        <div class="bg-gradient-to-r from-[#0B214A] to-[#071838] border border-white/10 rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-4">
          <div class="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#00D2FF] mx-auto">
            <svg class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>

          <div class="space-y-2">
            <h2 class="font-display text-2xl font-bold text-white">Don't See Your Exact Role?</h2>
            <p class="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              We are always open to meeting talented builders and engineers. Send your resume and portfolio directly to our team.
            </p>
          </div>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:careers@corezan.ai?subject=General Engineering Application&body=Hi Corezan Team,%0D%0A%0D%0AI would like to introduce myself for future opportunities.%0D%0A%0D%0AName: %0D%0AGitHub / Portfolio: %0D%0AAttached Resume:"
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
              class="inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-xl h-11 px-6 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all font-mono"
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
                    <span>{{ job.type }}</span>
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
                <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">Key Technologies</h4>
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
                <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">About the Role</h4>
                <p class="text-sm text-slate-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                  {{ job.overview }}
                </p>
              </div>

              <!-- Key Responsibilities -->
              <div class="space-y-2">
                <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Responsibilities</h4>
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
                <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Requirements</h4>
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
    { id: 'ai', name: 'AI Engineering' },
    { id: 'fullstack', name: 'Full-Stack' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'frontend', name: 'Frontend & UI' },
  ];

  // Exactly 4 essential, practical roles
  positions: JobPosition[] = [
    {
      id: 'ai-ml-engineer',
      title: 'AI / Machine Learning Engineer',
      departmentId: 'ai',
      departmentName: 'AI Engineering',
      location: 'Chennai / Hybrid',
      experience: '2-5 Years',
      type: 'Full-time',
      techStack: ['Python', 'PyTorch', 'LLMs', 'LangChain', 'Vector DBs (Qdrant/Pinecone)', 'RAG'],
      overview: 'Build and deploy domain-specific AI models, retrieval-augmented pipelines (RAG), and intelligent agent automation for enterprise applications.',
      responsibilities: [
        'Develop and optimize private RAG pipelines for enterprise document retrieval and search.',
        'Fine-tune open-source models (Llama, Mistral) on customer domain datasets using LoRA.',
        'Build and test deterministic tool-calling agents with structured schema validations.',
        'Collaborate with backend engineers to integrate AI microservices with low inference latency.',
      ],
      qualifications: [
        '2+ years of hands-on experience building AI/ML applications in Python.',
        'Strong practical understanding of transformers, embeddings, and vector databases.',
        'Experience deploying models with FastAPI, vLLM, or Hugging Face ecosystems.',
      ],
    },
    {
      id: 'fullstack-engineer',
      title: 'Senior Full-Stack Engineer',
      departmentId: 'fullstack',
      departmentName: 'Full-Stack',
      location: 'Chennai / Hybrid',
      experience: '3-6 Years',
      type: 'Full-time',
      techStack: ['Node.js / Python', 'Angular / React', 'TypeScript', 'PostgreSQL', 'REST / GraphQL'],
      overview: 'Develop scalable web applications and high-throughput microservices, connecting clean responsive frontend portals with robust backends.',
      responsibilities: [
        'Build full-stack modules and dashboards for ZARO business applications and client portals.',
        'Architect scalable REST and GraphQL APIs handling high concurrent transactions.',
        'Design database schemas and optimize PostgreSQL queries for fast retrieval.',
        'Maintain automated test coverage and participate in code reviews.',
      ],
      qualifications: [
        '3+ years of full-stack experience with modern TypeScript and frontend frameworks.',
        'Solid background in backend development with Node.js, Express, or Python.',
        'Experience with relational databases (PostgreSQL, MySQL) and ORMs.',
      ],
    },
    {
      id: 'cloud-devops-engineer',
      title: 'Cloud & DevOps Engineer',
      departmentId: 'cloud',
      departmentName: 'Cloud & DevOps',
      location: 'Chennai / Hybrid',
      experience: '3-5 Years',
      type: 'Full-time',
      techStack: ['Docker', 'Kubernetes', 'AWS / Azure', 'Terraform', 'CI/CD (GitHub Actions)', 'Linux'],
      overview: 'Manage cloud infrastructure, container orchestration, automated deployment pipelines, and high availability systems across multi-cloud environments.',
      responsibilities: [
        'Maintain and monitor production Kubernetes clusters with zero-downtime rolling updates.',
        'Write Terraform and Infrastructure-as-Code modules for cloud resources.',
        'Automate testing, build, and deployment pipelines using GitHub Actions or GitLab CI.',
        'Implement logging, monitoring, and alerting using Prometheus and Grafana.',
      ],
      qualifications: [
        '3+ years managing production infrastructure on AWS, Azure, or GCP.',
        'Strong expertise with Docker, Kubernetes, Linux system administration, and shell scripting.',
        'Practical experience with Infrastructure-as-Code (Terraform) and CI/CD pipelines.',
      ],
    },
    {
      id: 'frontend-ui-engineer',
      title: 'UI/UX & Frontend Engineer',
      departmentId: 'frontend',
      departmentName: 'Frontend & UI',
      location: 'Chennai / Hybrid',
      experience: '2-5 Years',
      type: 'Full-time',
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS', 'UI/UX Design', 'Figma', 'Responsive Web'],
      overview: 'Craft fast, intuitive, and responsive user interfaces, translating Figma design systems into clean, reusable Angular components.',
      responsibilities: [
        'Develop responsive web interfaces with modern Angular (Signals, Standalone) and Tailwind CSS.',
        'Partner with product leads to prototype and refine UI/UX flows in Figma.',
        'Optimize web performance, ensuring sub-second load times and smooth mobile responsiveness.',
        'Maintain design system consistency, typography standards, and accessibility.',
      ],
      qualifications: [
        '2+ years of professional frontend development with Angular and modern CSS/Tailwind.',
        'A strong aesthetic eye for clean typography, spacing, and micro-interactions.',
        'Experience turning Figma UI designs into pixel-accurate, mobile-friendly code.',
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
      `Dear Corezan & ZARO Team,\n\n` +
      `I am applying for the position of ${job.title}.\n\n` +
      `Name: \n` +
      `Current Role & Location: \n` +
      `GitHub / Portfolio / LinkedIn: \n` +
      `Brief summary of experience:\n\n` +
      `[Attached Resume / CV]\n`
    );
    return `mailto:careers@corezan.ai?subject=${subject}&body=${body}`;
  }
}
