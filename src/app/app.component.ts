import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { PORTFOLIO_DATA } from './data/portfolio-data';
import * as AOS from 'aos';
import { CertificationsComponent } from './components/certifications/certifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    HeroComponent, 
    SkillsComponent, 
    ExperienceComponent, 
    ProjectsComponent, 
    ContactComponent,
    CertificationsComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero [name]="data.name" [title]="data.title"></app-hero>
      
      <section id="about" class="section-padding bg-dark-2">
        <div class="container">
          <div class="row align-items-center g-5">
            <!-- Left Side: About Me Text -->
            <div class="col-lg-7" data-aos="fade-right">
              <h5 class="text-accent mb-3 fw-bold tracking-widest text-uppercase small">About Me</h5>
              <h2 class="display-6 fw-bold text-white mb-4 ">Building Scalable <span class="text-accent">Digital Solutions</span> with Angular & .NET</h2>
        
              <p class="text-light-muted fs-5 mb-4 lh-lg bio-text">{{data.bio}}</p>
              
              <div class="row mt-5">
                <!-- Experience detail with Icon -->
                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center">
                    <div class="about-icon-box me-3"><i class="bi bi-briefcase text-accent"></i></div>
                    <div>
                      <h6 class="text-white mb-0 fw-bold">Experience</h6>
                      <p class="text-light-muted small mb-0">2+ Years Professional</p>
                    </div>
                  </div>
                </div>

                <!-- Education detail with Icon -->
                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center">
                    <div class="about-icon-box me-3"><i class="bi bi-mortarboard text-accent"></i></div>
                    <div>
                      <h6 class="text-white mb-0 fw-bold">Education</h6>
                      <p class="text-light-muted small mb-0">B.Tech Computer Engineering</p>
                    </div>
                  </div>
                </div>

                <!-- Location detail -->
                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center">
                    <div class="about-icon-box me-3"><i class="bi bi-geo-alt text-accent"></i></div>
                    <div>
                      <h6 class="text-white mb-0 fw-bold">Location</h6>
                      <p class="text-light-muted small mb-0">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                <!-- Languages detail -->
                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center">
                    <div class="about-icon-box me-3"><i class="bi bi-translate text-accent"></i></div>
                    <div>
                      <h6 class="text-white mb-0 fw-bold">Languages</h6>
                      <p class="text-light-muted small mb-0">English, Hindi, Marathi</p>
                    </div>
                  </div>
                </div>
              </div>

             <div data-aos="zoom-in" data-aos-delay="300" class="mt-4 pt-2 text-center text-lg-start">
                <a href="assets/Roshani_Patil_Resume.pdf" download="Roshani_Patil_Resume.pdf" class="btn btn-custom btn-resume py-3 px-5 fw-bold d-inline-flex align-items-center">
                  <i class="bi bi-file-earmark-pdf me-2 fs-5"></i> Download Resume
                </a>
              </div>
            </div>

            <!-- Right Side: Stats Card -->
            <div class="col-lg-5" data-aos="fade-left">
              <div class="glass-card p-5 text-center floating-card">
                 <div class="row">
                   <div class="col-6 mb-4">
                      <h3 class="display-4 fw-bold text-white mb-1">2+</h3>
                      <p class="text-accent text-uppercase small fw-bold tracking-wider">Years Exp.</p>
                   </div>
                   <div class="col-6 mb-4">
                      <h3 class="display-4 fw-bold text-white mb-1">2</h3>
                      <p class="text-accent text-uppercase small fw-bold tracking-wider">Key Projects</p>
                   </div>
                   <div class="col-12 mt-4 pt-4 border-top border-secondary border-opacity-25">
                     <p class="fst-italic text-light-muted lh-lg">"Passionate about leveraging modern technology to solve real-world problems and creating impactful user experiences."</p>
                     <div class="d-flex justify-content-center gap-2 mt-3 text-accent fs-4">
                       <i class="bi bi-star-fill"></i>
                       <i class="bi bi-star-fill"></i>
                       <i class="bi bi-star-fill"></i>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <app-skills [skills]="data.skills"></app-skills>
      <app-experience [experience]="data.experience"></app-experience>
      <app-projects [projects]="projectsToShow"></app-projects>
      <app-certifications></app-certifications>
      <app-contact 
        [email]="data.social.email" 
        [github]="data.social.github" 
        [linkedin]="data.social.linkedin">
      </app-contact>
    </main>
    <footer class="py-5 text-center bg-dark">
      <div class="container">
        <p class="mb-0 text-muted">&copy; {{currentYear}} {{data.name}}. Built with Angular 18.</p>
      </div>
    </footer>
  `,
  styles: [`
    .bg-dark-2 { background-color: #0b1120; }
    .text-accent { color: #00bcd4; }
    .text-light-muted { color: #cbd5e1; }
    .tracking-widest { letter-spacing: 0.2rem; }
    
    .about-icon-box {
      width: 48px; height: 48px;
      background: rgba(0, 188, 212, 0.1);
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem;
      border: 1px solid rgba(0, 188, 212, 0.15);
    }

    .btn-resume {
      background: #00bcd4;
      color: #0b1120;
      border: none;
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 10px 20px rgba(0, 188, 212, 0.15);
      &:hover {
        background: #00e5ff;
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 188, 212, 0.3);
        color: #0b1120;
      }
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(12px);
      border-radius: 30px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .bio-text {
  text-align: justify;
}

    .floating-card {
      animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  `]
})
export class AppComponent implements OnInit {
  data = PORTFOLIO_DATA;
  currentYear = new Date().getFullYear();
  projectsToShow = PORTFOLIO_DATA.projects.slice(0, 2);

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }
}