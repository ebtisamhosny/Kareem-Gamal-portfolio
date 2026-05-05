import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  title: string;
  provider: string;
  date: string;
  icon: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Course[] = [
    { title: 'CMOS Analog IC Design', provider: 'Information Technology Institute (ITI)', date: 'Jul 2025 - Sep 2025', icon: 'fas fa-microchip' },
    { title: 'Verilog for Engineers', provider: 'Abdallah El Ghamry', date: 'Jan 2025 - Present', icon: 'fas fa-code' },
    { title: 'Python Programming', provider: 'Ain Shams University', date: 'Jul 2024 - Aug 2024', icon: 'fab fa-python' },
    { title: 'MATLAB for Engineers', provider: 'Ain Shams University', date: 'Multiple academic projects', icon: 'fas fa-square-root-alt' },
    { title: 'Problem Solving (C++, Python)', provider: 'Osama El Zero', date: 'Oct 2024 - Nov 2024', icon: 'fas fa-puzzle-piece' }
  ];
}
