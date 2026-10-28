import { Component } from '@angular/core';
import { EcosystemSectionComponent } from './ecosystem-section.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { HeroComponent } from './hero.component';
import { ModulesGridComponent } from './modules-grid.component';
import { SolutionsGridComponent } from './solutions-grid.component';

@Component({
  imports: [
    HeaderComponent,
    HeroComponent,
    SolutionsGridComponent,
    ModulesGridComponent,
    EcosystemSectionComponent,
    FooterComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
