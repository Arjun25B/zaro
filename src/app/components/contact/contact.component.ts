import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="bg-[#071838] py-20 text-white border-t border-white/10 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          <!-- Left Column (5 cols): Enterprise Details & Contact Channels -->
          <div class="lg:col-span-5 space-y-6">
            <div>
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-[#00D2FF]">
                GET IN TOUCH
              </span>
              <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
                Schedule a Conversation with Our Team
              </h2>
              <p class="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether exploring private AI models with Corezan or mapping an enterprise-wide cloud orchestration with ZARO, our architects are available to assist.
              </p>
            </div>

            <!-- Direct Channels -->
            <div class="space-y-4 pt-4 border-t border-white/10">
              <div class="flex items-start gap-4">
                <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-[#00D2FF] mt-0.5">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono text-slate-400 uppercase">Direct Enterprise Line</div>
                  <a href="tel:+919940397098" class="text-base font-bold text-white hover:text-[#00D2FF] transition-colors">
                    +91 99403 97098
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-[#00D2FF] mt-0.5">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono text-slate-400 uppercase">Enterprise Inquiries</div>
                  <a href="mailto:info@corezan.ai" class="text-base font-bold text-white hover:text-[#00D2FF] transition-colors">
                    info@corezan.ai
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-[#00D2FF] mt-0.5">
                  <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono text-slate-400 uppercase">Global Delivery Hub</div>
                  <div class="text-base font-semibold text-white">
                    Chennai, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            <!-- Availability Badge -->
            <div class="p-4 rounded-xl bg-[#0B214A]/60 border border-white/10 flex items-center gap-3">
              <svg class="w-6 h-6 text-[#00D2FF] shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <div class="text-xs text-slate-300">
                <strong class="text-white block font-semibold">24/7 Global Deployment Support</strong>
                Dedicated solution architects assigned within 2 business hours.
              </div>
            </div>
          </div>

          <!-- Right Column (7 cols): Glassmorphic Form Card -->
          <div class="lg:col-span-7 bg-[#0B214A]/85 backdrop-blur-xl rounded-2xl p-8 sm:p-10 border border-white/10 shadow-2xl relative">
            @if (submitted()) {
              <div class="py-12 text-center space-y-4">
                <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <svg class="w-8 h-8 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 class="font-display text-2xl font-bold text-white">
                  Consultation Request Received
                </h3>
                <p class="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong class="text-white">{{ form.name }}</strong>. Our enterprise architecture team will contact you at <strong class="text-white">{{ form.email }}</strong> shortly.
                </p>
                <button
                  type="button"
                  (click)="resetForm()"
                  class="mt-4 h-11 px-6 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold inline-flex items-center justify-center transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            } @else {
              <form (ngSubmit)="onSubmit()" class="space-y-5">
                <div class="space-y-1">
                  <h3 class="font-display text-xl font-bold text-white">
                    Request an Architectural Briefing
                  </h3>
                  <p class="text-xs text-slate-400">
                    All conversations are protected under our mutual non-disclosure agreement.
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-semibold text-slate-300">
                      Full Name *
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="e.g. Elena Rostova"
                      [(ngModel)]="form.name"
                      class="flex h-12 w-full rounded-xl border border-white/15 bg-[#030A19]/70 px-4 py-2 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] transition-all"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-semibold text-slate-300">
                      Company / Organization
                    </label>
                    <input
                      name="company"
                      placeholder="e.g. Apex Logistics Ltd"
                      [(ngModel)]="form.company"
                      class="flex h-12 w-full rounded-xl border border-white/15 bg-[#030A19]/70 px-4 py-2 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] transition-all"
                    />
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-slate-300">
                    Corporate Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="name@enterprise.com"
                    [(ngModel)]="form.email"
                    class="flex h-12 w-full rounded-xl border border-white/15 bg-[#030A19]/70 px-4 py-2 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] transition-all"
                  />
                </div>

                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-slate-300">
                    Project Requirements / Domain Verticals *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    placeholder="Briefly describe your systems, expected concurrency, or target industry module..."
                    [(ngModel)]="form.message"
                    class="flex min-h-[120px] w-full rounded-xl border border-white/15 bg-[#030A19]/70 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF] transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  [disabled]="isSubmitting()"
                  class="w-full h-11 rounded-xl bg-[#0070F3] hover:bg-[#005BD0] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#0070F3]/25 transition-all group disabled:opacity-50"
                >
                  <span>{{ isSubmitting() ? 'Submitting...' : 'Schedule Technical Consultation' }}</span>
                  <svg class="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  form = {
    name: '',
    company: '',
    email: '',
    message: '',
  };

  submitted = signal(false);
  isSubmitting = signal(false);

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitted.set(true);
    }, 600);
  }

  resetForm() {
    this.form = { name: '', company: '', email: '', message: '' };
    this.submitted.set(false);
  }
}
