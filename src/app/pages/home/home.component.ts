import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { BrandPillarsComponent } from '../../components/brand-pillars/brand-pillars.component';
import { ZaroPlatformComponent } from '../../components/zaro-platform/zaro-platform.component';
import { CorezanAiComponent } from '../../components/corezan-ai/corezan-ai.component';
import { WhyChooseComponent } from '../../components/why-choose/why-choose.component';
import { IndustryModulesComponent } from '../../components/industry-modules/industry-modules.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    BrandPillarsComponent,
    ZaroPlatformComponent,
    CorezanAiComponent,
    WhyChooseComponent,
    IndustryModulesComponent,
    CtaBannerComponent,
    ContactComponent,
  ],
  template: `
    <!-- 1. Hero Section (6+6 Asymmetric & Orbital SVG) -->
    <app-hero />

    <!-- 2. Brand Pillars Section (65/35 Asymmetric Grid) -->
    <app-brand-pillars />

    <!-- 3. ZARO Platform Overview (2x2 Slate-Indigo & Tint Grids) -->
    <app-zaro-platform />

    <!-- 4. Corezan AI Solutions (1 + 2x2 Featured Architecture) -->
    <app-corezan-ai />

    <!-- 5. Why Choose Section (5+7 Split & Deployments) -->
    <app-why-choose />

    <!-- 6. Industry Modules Directory (Signals Category Filter + 30 Tiles) -->
    <app-industry-modules />

    <!-- 7. CTA Banner Section (Anchored to #contact) -->
    <app-cta-banner />

    <!-- 8. Dedicated Contact Section (5+7 Channels & Glass Form) -->
    <app-contact />
  `,
})
export class HomeComponent {}
