import { Component } from '@angular/core';

interface Skill { name: string; level: string; }
interface Project {
  number: string;
  label: string;
  name: string;
  description: string;
  highlights?: string[];
  tags: string[];
  url?: string;
  featured?: boolean;
  smallBuilds?: boolean;
}
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
    {
      number: '01',
      label: 'ENTERPRISE ERP',
      name: 'EnterCraft 2.0',
      description: 'Built and enhanced a cloud-based, mobile-ready ERP for bearing and inventory operations, covering the full workflow across customers, vendors, warehouses, job work, production, stock movement, dispatch, and billing.',
      highlights: [
        'Delivered modules for stock, purchase and sales orders, quotations, invoicing, warehouse operations, and business reporting.',
        'Integrated GST-compliant e-Invoice and e-Way Bill workflows, including IRN generation.',
        'Implemented JWT authentication, role-based access, WebSocket notifications, and performance-focused API and MongoDB optimizations.',
      ],
      tags: ['Angular', 'TypeScript', 'Node.js', 'Fastify', 'MongoDB', 'WebSockets'],
      url: 'https://v2.entercraft.co/',
      featured: true,
    },
    {
      number: '02',
      label: 'SCHOOL ERP · TEAM OF 4',
      name: 'SIMS IntelliCraft',
      description: 'Built a comprehensive school management platform with a four-member team, connecting administrators, teachers, students, and parents through responsive Angular interfaces and scalable backend APIs.',
      highlights: [
        'Developed academic and administrative workflows for admissions, attendance, timetables, examinations, grades, fees, staff, homework, lesson planning, PTM, communication, and reporting.',
        'Supported transport with live GPS tracking and journey history, plus hostel, mess, library and books, school inventory, resource management, and operational analytics.',
        'Applied JWT, role-based access, and WebSocket notifications; partnered with QA and cross-functional teams on testing, debugging, optimization, and production support.',
        'Used Claude-assisted development for debugging, refactoring, API documentation, and implementation support, with manual review and testing.',
      ],
      tags: ['Angular', 'TypeScript', 'Node.js', 'Fastify', 'MongoDB', 'WebSockets'],
      url: 'https://intellicraft.io/',
    },
    { number: '03', label: 'INDEPENDENT BUILD', name: 'CRM Platform', description: 'Designed and developed from scratch as an independent learning project, exploring practical customer-management workflows and full-stack architecture.', tags: ['From Scratch', 'Full Stack', 'Learning'] },
    { number: '04', label: 'SMALL BUILDS', name: 'Boutique & More', description: 'A collection of smaller web projects, including a boutique experience, created to practice responsive interfaces and end-to-end development.', tags: ['Responsive Web', 'UI'], smallBuilds: true },
  ];

  readonly trainings: Training[] = [
    { number: '01', title: 'Full Stack Development with Node.js', provider: 'Bangalore Computer Education' },
    { number: '02', title: 'Data Structures and Algorithms', provider: 'Bangalore Computer Education' },
    { number: '03', title: 'Web Development', provider: 'Solitaire Infosys Private Limited' },
  ];
}
