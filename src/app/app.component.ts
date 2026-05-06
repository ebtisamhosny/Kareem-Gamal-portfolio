import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoverComponent } from './components/cover/cover.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    CoverComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    CoursesComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'Kareem Portfolio';

  ngAfterViewInit(): void {
    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });
    reveals.forEach(r => io.observe(r));

    // Active link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        const top = (sec as HTMLElement).offsetTop - 120;
        if (window.scrollY >= top) current = sec.id;
      });
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
      });
    });
  }
}
