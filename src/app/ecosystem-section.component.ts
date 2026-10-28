import { Component } from '@angular/core';

@Component({
  selector: 'app-ecosystem-section',
  standalone: true,
  templateUrl: './ecosystem-section.component.html',
})
export class EcosystemSectionComponent {
  readonly services = [
    ['▣', 'AI Development & Consulting'],
    ['⚙', 'Intelligent Automation'],
    ['▥', 'Data Analytics & Insights'],
    ['☁', 'Cloud Engineering & Integration'],
    ['‹ ›', 'Product Development'],
  ];

  readonly industries = [
    { title: 'Aviation & Travel', image: 'photo-1436491865332-7a61a109cc05' },
    { title: 'Manufacturing', image: 'photo-1581091226825-a6a2a5aee158' },
    { title: 'Healthcare', image: 'photo-1576091160399-112ba8d25d1d' },
    { title: 'Smart Cities', image: 'photo-1519501025264-65ba15a82390' },
    { title: 'Logistics & Supply Chain', image: 'photo-1586528116311-ad8dd3c8310d' },
  ];
}
