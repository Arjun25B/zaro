import { Component } from '@angular/core';

@Component({
  selector: 'app-modules-grid',
  standalone: true,
  templateUrl: './modules-grid.component.html',
})
export class ModulesGridComponent {
  readonly modules = [
    ['△', 'Airports & Aerospace'], ['▤', 'Industrial'], ['▱', 'Construction'],
    ['▣', 'Public Services'], ['♧', 'Municipality'], ['▥', 'Cities'],
    ['◇', 'Cybersecurity'], ['▤', 'Buildings'], ['↔', 'Transportation'],
    ['▰', 'Logistics'], ['◉', 'Ports'], ['☼', 'Marine'],
    ['⌁', 'Telecom'], ['◷', 'Marketing'], ['🛒', 'Retail'],
    ['↗', 'Hospitality'], ['＋', 'Healthcare'], ['♜', 'Waste'],
    ['☻', 'Farming'], ['⬡', 'Mining'], ['♧', 'Oil & Gas'],
    ['↑', 'Parking'], ['ϟ', 'Equestrian'], ['◇', 'Defense'],
    ['▱', 'Laundry'], ['◉', 'Amusement'], ['▤', 'Warehouses'],
    ['◉', 'Media'], ['☁', 'Climate Monitoring'], ['＋', 'Custom Domain'],
  ];
}
