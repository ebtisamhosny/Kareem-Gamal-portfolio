import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email = 'kareemgamal935@gmail.com';
  emailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=kareemgamal935@gmail.com';
  phone = '+201206162982';
  phoneDisplay = '+20 120 616 2982';
  linkedin = 'https://www.linkedin.com/in/kareem-gamal-85a4a1349/';
  github = 'https://github.com/';
}
