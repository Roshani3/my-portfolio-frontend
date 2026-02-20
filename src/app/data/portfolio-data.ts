import { PortfolioData } from '../models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Roshani Patil",
  title: "Full Stack .NET & Angular Developer",
  bio: "Results-oriented Software Engineer with 2+ years of experience delivering enterprise-scale applications using Angular and .NET Core. Proven ability to architect scalable solutions, optimize application performance, and implement clean, maintainable code following best industry practices. Passionate about transforming complex business requirements into efficient, secure, and user-centric digital solutions.",
  social: {
    linkedin: "https://www.linkedin.com/in/roshani-patil-a1a3a4252 ",
    github: "https://github.com/Roshani3",
    email: "roshanipatil4212@gmail.com   "
  },
  skills: [
    { name: "Angular 18", category: "Frontend", icon: "bi-patch-check-fill", proficiency: 90 },
    { name: "TypeScript / JavaScript", category: "Frontend", icon: "bi-code-slash", proficiency: 85 },
    { name: "HTML5 & CSS3/SCSS", category: "Frontend", icon: "bi-filetype-css", proficiency: 95 },
    { name: "Bootstrap / Angular Material", category: "Frontend", icon: "bi-layout-sidebar-inset", proficiency: 90 },
    { name: ".NET Core / Web API", category: "Backend", icon: "bi-gear-fill", proficiency: 80 },
    { name: "C# / Entity Framework", category: "Backend", icon: "bi-braces", proficiency: 85 },
    { name: "MS SQL Server", category: "Database", icon: "bi-database-fill", proficiency: 80 },
    { name: "Git / Azure DevOps", category: "Tools", icon: "bi-github", proficiency: 85 },
  ],
  experience: [
    {
      company: "Rheal Software Pvt. Ltd.",
      role: "Software Engineer",
      period: "2024 - Present",
      description: [
        "Contributing to the development and enhancement of enterprise web applications using Angular and .NET Core.",
        "Designing and implementing reusable Angular components, reactive forms, and dynamic UI features based on business requirements.",
        "Integrating RESTful APIs and ensuring seamless data communication between frontend and backend systems.",
        "Working with SQL Server to write optimized queries and support stored procedures for efficient data management.",
        "Identifying and resolving application issues, improving performance, and enhancing user experience through structured code and best practices."
      ],
      techUsed: ["Angular", ".NET Core", "Web API", "SQL Server", "RxJS", "NgRx"]
    }
  ],
  projects: [
    {
      title: "Conference Management System",
      description: "A web-based application developed to manage conferences, attendees, companies, meetings, and follow-up communications in a centralized system. The platform streamlines event management, improves tracking, and enhances productivity through advanced filtering and optimized performance.",
      image: "assets/conference.png",
      tags: ["Angular 18", ".NET 6", "ASP.NET Core Web API", "SQL Server"],
      features: [
        "Dynamic CRUD operations for attendees, companies, conferences, and meetings.",
        "Advanced search and multi-filter functionality with Select All option.",
        "Conference-year based attendee mapping and management.",
        "Meeting scheduling with interactive date-time picker integration.",
        "Follow-up reminder tracking with comment history and timestamps.",
        "Session storage implementation to persist filters across pages.",
        "State management using NgRx for predictable data flow.",
        "Performance optimization using OnPush change detection and trackBy.",
        "REST API integration with ASP.NET Core backend.",
        "SQL Server integration using stored procedures for efficient data handling.",
        "Secure role-based access and authentication handling.",
        "Audit logging system to track updates and user actions."
      ]
      ,
      github: "https://github.com/yourusername/conference-web"
    }
    // {
    //    title: "Real-time Dashboard",
    //    description: "A data visualization tool for monitoring server health and application logs in real-time.",
    //    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad89?auto=format&fit=crop&q=80&w=800",
    //    tags: ["Angular", "Chart.js", "SignalR"],
    //    features: [
    //      "Live data streaming using SignalR.",
    //      "Interactive charts and heatmaps.",
    //      "Export to PDF/Excel functionality."
    //    ]
    // }
  ]
};
