import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[#030A19] text-slate-300 border-t border-[#122A54] pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          <!-- Brand Column (cols 1-4) -->
          <div class="lg:col-span-4 space-y-6">
            <div class="flex items-center gap-3">
              <img
                src="/corezan-logo.png"
                alt="Corezan AI"
                class="h-9 w-auto object-contain"
              />
              <div class="h-6 w-[1px] bg-white/20"></div>
              <img
                src="/zaro-logo.png"
                alt="ZARO Cloud"
                class="h-8 w-auto object-contain"
              />
            </div>

            <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
              Connecting cognitive enterprise intelligence with resilient cloud operational systems. Engineered for high-throughput, mission-critical operations globally.
            </p>

            <div class="flex items-center gap-3">
              <!-- LinkedIn -->
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                class="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-[#00D2FF]/40 transition-all"
                aria-label="LinkedIn"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <!-- X / Twitter -->
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                class="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-[#00D2FF]/40 transition-all"
                aria-label="X (formerly Twitter)"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <!-- Facebook -->
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                class="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-[#00D2FF]/40 transition-all"
                aria-label="Facebook"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>

              <!-- Globe -->
              <a
                href="#hero"
                class="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-[#00D2FF]/40 transition-all"
                aria-label="Global Website"
              >
                <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links Column (cols 5-6) -->
          <div class="lg:col-span-2 space-y-4">
            <h4 class="font-display text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="#hero" class="hover:text-[#00D2FF] transition-colors">Overview</a></li>
              <li><a href="#corezan" class="hover:text-[#00D2FF] transition-colors">Corezan AI Solutions</a></li>
              <li><a href="#zaro" class="hover:text-[#00D2FF] transition-colors">ZARO Platform</a></li>
              <li><a href="#industries" class="hover:text-[#00D2FF] transition-colors">Industry Directory</a></li>
              <li><a href="#why" class="hover:text-[#00D2FF] transition-colors">Why Corezan & ZARO</a></li>
              <li><a href="#contact" class="hover:text-[#00D2FF] transition-colors">Schedule Consultation</a></li>
            </ul>
          </div>

          <!-- Platform Column (cols 7-9) -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="font-display text-xs font-bold uppercase tracking-wider text-white">Platform Suite</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="#zaro" class="hover:text-[#00D2FF] transition-colors flex items-center justify-between">ZARO Business ERP ↗</a></li>
              <li><a href="#zaro" class="hover:text-[#00D2FF] transition-colors flex items-center justify-between">ZARO Virtual World ↗</a></li>
              <li><a href="#zaro" class="hover:text-[#00D2FF] transition-colors flex items-center justify-between">High-Throughput API Mesh ↗</a></li>
              <li><a href="#corezan" class="hover:text-[#00D2FF] transition-colors flex items-center justify-between">Private LLM Infrastructure ↗</a></li>
              <li><a href="#corezan" class="hover:text-[#00D2FF] transition-colors flex items-center justify-between">Cognitive Agent Swarms ↗</a></li>
            </ul>
          </div>

          <!-- Enterprise Contact & Support (cols 10-12) -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="font-display text-xs font-bold uppercase tracking-wider text-white">Direct Inquiries</h4>
            <div class="space-y-3 text-sm text-slate-400">
              <div class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Chennai, Tamil Nadu, India — Global Delivery Center</span>
              </div>
              <div class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-[#00D2FF] shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:info@corezan.ai" class="hover:text-white transition-colors">info@corezan.ai</a>
              </div>
              <div class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-[#00D2FF] shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919940397098" class="hover:text-white transition-colors">+91 99403 97098</a>
              </div>
              <div class="pt-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Global 24/7 Enterprise Tier
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sub-footer -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {{ currentYear }} Corezan Technologies & ZARO Cloud Platform. All rights reserved.
          </div>
          <div class="flex items-center gap-6">
            <span class="text-slate-400 font-display font-medium">Intelligence. Integration. Innovation.</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
