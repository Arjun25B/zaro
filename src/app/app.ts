import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BrandPillarsComponent } from './components/brand-pillars/brand-pillars.component';
import { ZaroPlatformComponent } from './components/zaro-platform/zaro-platform.component';
import { CorezanAiComponent } from './components/corezan-ai/corezan-ai.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { IndustryModulesComponent } from './components/industry-modules/industry-modules.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    BrandPillarsComponent,
    ZaroPlatformComponent,
    CorezanAiComponent,
    WhyChooseComponent,
    IndustryModulesComponent,
    CtaBannerComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
