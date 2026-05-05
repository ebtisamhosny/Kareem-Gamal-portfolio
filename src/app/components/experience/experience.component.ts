import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  title: string;
  role: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  items: ExperienceItem[] = [
    {
      title: 'Resala Charity Organization',
      role: 'Volunteer Instructor',
      description: 'Delivered educational training in computer skills and basic programming, helping students build digital fluency from the ground up.'
    },
    {
      title: 'Mashrou\' Matar Foundation',
      role: 'Accessibility Volunteer',
      description: 'Assisted visually impaired individuals with learning resources and digital literacy support, enabling more inclusive access to technology.'
    }
  ];
}
