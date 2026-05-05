import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Folded Cascode OTA with CMFB',
      description: 'Fully differential OTA in 180nm CMOS, integrated CMFB for gain of 2 — achieving 3.58V diff. output swing and 96ns settling time with robust loop stability. Designed using gm/ID methodology and ADT, verified with Cadence and Xschem.',
      icon: 'fas fa-wave-square',
      tags: ['180nm CMOS', 'Cadence', 'Xschem', 'ADT']
    },
    {
      title: 'Two-Stage Miller OTA',
      description: '180nm CMOS OTA achieving 69 dB gain, 72° phase margin, and 5 V/μs slew rate using gm/ID methodology and ADT — meeting all power and swing specs.',
      icon: 'fas fa-broadcast-tower',
      tags: ['180nm CMOS', 'gm/ID', 'ADT']
    },
    {
      title: 'Digitally Controlled VGA',
      description: '65nm CMOS VGA delivering 6 OR 12 dB programmable gain with >60° phase margin and 1.76 V pk-pk output, verified across PVT corners.',
      icon: 'fas fa-sliders-h',
      tags: ['65nm CMOS', 'VGA', 'PVT']
    },
    {
      title: 'Bandgap Voltage Reference (BGR)',
      description: '1.2V reference in 65nm CMOS with low temperature coefficient and <1% current mismatch. Integrated startup circuit and PDK resistors, verified across PVT corners and Monte Carlo simulations.',
      icon: 'fas fa-bolt',
      tags: ['65nm CMOS', 'BGR', 'Monte Carlo']
    },
    {
      title: 'Voltage Amplifier',
      description: 'Designed and implemented a voltage amplifier circuit using LTspice for simulation and hand analysis to verify theoretical behavior.',
      icon: 'fas fa-volume-up',
      tags: ['LTspice', 'Hand Analysis']
    },
    {
      title: 'Circuit Simulator (Python GUI)',
      description: 'Developed an interactive educational tool to visualize and simulate electronic circuits, making analog concepts more accessible to students.',
      icon: 'fas fa-laptop-code',
      tags: ['Python', 'GUI', 'Simulation']
    },
    {
      title: '32-bit MIPS Processor',
      description: 'Designed and verified a 32-bit MIPS processor core supporting a key subset of the ISA. Implemented data path and control unit using RTL with Quartus and ModelSim.',
      icon: 'fas fa-microchip',
      tags: ['Verilog', 'Quartus', 'ModelSim']
    },
    {
      title: 'Bank Queue System (C++)',
      description: 'Built a queue simulation to manage banking operations efficiently using OOP principles in C++.',
      icon: 'fas fa-university',
      tags: ['C++', 'OOP', 'Data Structures']
    },
    {
      title: 'Wave Propagation Simulations',
      description: 'Used MATLAB / Octave to design and visualize wave propagation phenomena for academic study.',
      icon: 'fas fa-water',
      tags: ['MATLAB', 'Octave']
    },
    {
      title: 'Wireless Electricity Transmission',
      description: 'Engineered a model based on Tesla coil theory for wireless energy delivery, combining electromagnetic resonance with safety considerations.',
      icon: 'fas fa-tower-broadcast',
      tags: ['Tesla Coil', 'EM', 'Hardware']
    }
  ];
}
