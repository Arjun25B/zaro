import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-[85vh] pt-28 pb-16 flex items-center justify-center relative overflow-hidden bg-[#051129] text-white">
      <!-- Ambient Glow Orbs -->
      <div
        class="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0070F3]/15 blur-[150px]"
        aria-hidden="true"
      ></div>
      <div
        class="pointer-events-none absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00D2FF]/10 blur-[130px]"
        aria-hidden="true"
      ></div>

      <!-- Subtle Perspective Grid -->
      <div
        class="pointer-events-none absolute inset-0 opacity-15"
        style="background-image: linear-gradient(to right, rgba(0, 210, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 210, 255, 0.1) 1px, transparent 1px); background-size: 48px 48px;"
        aria-hidden="true"
      ></div>

      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
        <!-- Error Status Pill -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono tracking-wider uppercase">
          <span class="h-2 w-2 rounded-full bg-red-400 animate-ping"></span>
          <span>HTTP 404 // ROUTE_NOT_FOUND</span>
        </div>

        <!-- 404 Monospace Glyph Header -->
        <div class="relative inline-block">
          <div class="font-mono text-7xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 select-none drop-shadow-[0_0_35px_rgba(0,112,243,0.35)]">
            404
          </div>
          <span class="absolute -bottom-2 right-0 font-mono text-[10px] sm:text-xs text-[#00D2FF] tracking-widest px-2 py-0.5 rounded bg-[#071838] border border-[#0070F3]/40">
            [MESH_NODE_DISCONNECTED]
          </span>
        </div>

        <!-- Heading & Context -->
        <div class="space-y-3 max-w-xl mx-auto">
          <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Lost in the Cloud Fabric?
          </h1>
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            The requested URI is not registered on the ZARO distributed routing mesh or has been relocated to another enclave.
          </p>
        </div>

        <!-- High-Tech Diagnostic Terminal Box -->
        <div class="max-w-xl mx-auto bg-[#071838]/90 border border-white/10 rounded-2xl p-5 text-left font-mono text-xs text-slate-300 shadow-2xl backdrop-blur-md relative group">
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400">
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
              <span class="text-[11px] text-slate-400 font-sans ml-2">COREZAN_OS Diagnostic Terminal</span>
            </div>
            <span class="text-[10px] text-slate-500">v4.8.2-PROD</span>
          </div>

          <div class="space-y-1.5 text-[11px] sm:text-xs text-slate-300 overflow-x-auto pb-1">
            <div class="text-slate-400">> ingress.resolve_path(request.url)</div>
            <div class="text-rose-400">✖ [ERROR_404]: No matching route table found in cluster catalog.</div>
            <div class="text-slate-400">> edge_health_check()</div>
            <div class="text-emerald-400">✔ Primary Cloud Mesh: 100% Operational (12 Sovereign Regions Active)</div>
            <div class="text-[#00D2FF]">> failover_action: redirect_to_origin()</div>
          </div>
        </div>

        <!-- Recovery CTA Actions -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            routerLink="/"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[#0070F3] hover:bg-[#005BD0] text-white font-semibold text-sm shadow-lg shadow-[#0070F3]/30 transition-all group"
          >
            <svg class="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:-translate-x-1" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Return to Mesh Origin</span>
          </a>

          <a
            routerLink="/careers"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D2FF]/40 text-slate-200 hover:text-white font-semibold text-sm transition-all"
          >
            <span>Explore Open Roles</span>
            <svg class="w-4 h-4 text-[#00D2FF] fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class NotFoundComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
