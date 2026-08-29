import { Component } from '@angular/core';

interface Skill { name: string; level: string; }
interface Project { number: string; label: string; name: string; description: string; tags: string[]; featured?: boolean; smallBuilds?: boolean; }
interface Training { number: string; title: string; provider: string; }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly skills: Skill[] = [
    { name: 'Angular', level: 'Primary' },
    { name: 'Node.js', level: 'Primary' },
    { name: 'MongoDB', level: 'Primary' },
    { name: 'JavaScript', level: 'Daily' },
    { name: 'React', level: 'Working knowledge' },
    { name: 'SQL', level: 'Working knowledge' },
  ];

  readonly projects: Project[] = [
    { number: '01', label: 'FULL STACK', name: 'EnterCraft', description: 'An inventory management system designed to organize products, stock, and operational data. Contributed across both the frontend and backend.', tags: ['Angular', 'Node.js', 'MongoDB'], featured: true },
    { number: '02', label: 'TEAM PROJECT', name: 'IntelliCraft', description: 'A school management system built with a four-member team. Worked across the frontend and backend to support day-to-day academic workflows.', tags: ['Full Stack', 'Teamwork', 'APIs'] },
    { number: '03', label: 'INDEPENDENT BUILD', name: 'CRM Platform', description: 'Designed and developed from scratch as an independent learning project, exploring practical customer-management workflows and full-stack architecture.', tags: ['From Scratch', 'Full Stack', 'Learning'] },
    { number: '04', label: 'SMALL BUILDS', name: 'Boutique & More', description: 'A collection of smaller web projects, including a boutique experience, created to practice responsive interfaces and end-to-end development.', tags: ['Responsive Web', 'UI'], smallBuilds: true },
  ];

  readonly trainings: Training[] = [
    { number: '01', title: 'Full Stack Development with Node.js', provider: 'Bangalore Computer Education' },
    { number: '02', title: 'Data Structures and Algorithms', provider: 'Bangalore Computer Education' },
    { number: '03', title: 'Web Development', provider: 'Solitaire Infosys Private Limited' },
  ];
}