import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    { title: 'Languages', icon: 'fas fa-code', items: ['C++', 'Python', 'Verilog'] },
    { title: 'Tools', icon: 'fas fa-tools', items: ['Cadence Virtuoso', 'Xschem', 'ADT', 'MATLAB', 'LTspice', 'Logisim', 'LabVIEW', 'Modelsim', 'Quartus'] },
    { title: 'Domains', icon: 'fas fa-microchip', items: ['Analog IC Design', 'Mixed-Signal Design', 'Circuit Simulation', 'Semiconductor Fundamentals'] }
  ];
}
