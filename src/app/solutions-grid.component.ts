import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions-grid',
  standalone: true,
  templateUrl: './solutions-grid.component.html',
})
export class SolutionsGridComponent {
  readonly offerings = [
    { name: 'ZARO Business', icon: '▤', color: 'blue', copy: 'Enterprise tools for operations, CRM, and workflow automation that run entirely on the ZARO cloud backbone.', link: 'Explore ZARO Suite' },
    { name: 'ZARO Virtual World', icon: '✣', color: 'purple', copy: 'Immersive AR/VR/MR spaces for commerce, events, and brand experiences hosted natively on ZARO.', link: 'Spatial Computing' },
    { name: 'ZARO API & Integration', icon: '‹ ›', color: 'teal', copy: 'A unified developer layer connecting ZARO modules with third-party services, IoT devices, and partners.', link: 'Developer Hub' },
    { name: 'ZARO Industry Solutions', icon: '▥', color: 'red', copy: 'Tailored cloud applications and AI-powered workflows designed specifically for multiple global industries.', link: 'Vertical Modules' },
  ];
}
