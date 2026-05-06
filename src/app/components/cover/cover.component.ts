import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typed') typedEl!: ElementRef<HTMLSpanElement>;

  private roles = [
    'Analog IC Design Engineer',
    'Communications Engineering Student',
    'Mixed-Signal Designer',
    'Circuit Simulation Enthusiast'
  ];
  private ri = 0;
  private ci = 0;
  private deleting = false;
  private timer: any;

  ngAfterViewInit(): void {
    this.typeLoop();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private typeLoop = (): void => {
    if (!this.typedEl) return;
    const word = this.roles[this.ri];
    this.typedEl.nativeElement.textContent = this.deleting
      ? word.substring(0, this.ci--)
      : word.substring(0, this.ci++);
    let delay = this.deleting ? 45 : 90;
    if (!this.deleting && this.ci === word.length + 1) {
      delay = 1600;
      this.deleting = true;
    } else if (this.deleting && this.ci === 0) {
      this.deleting = false;
      this.ri = (this.ri + 1) % this.roles.length;
      delay = 300;
    }
    this.timer = setTimeout(this.typeLoop, delay);
  };
}
