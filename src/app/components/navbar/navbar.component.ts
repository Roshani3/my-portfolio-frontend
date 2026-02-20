import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;

  @ViewChild('navCollapse') navCollapse!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  closeNav(): void {
    const collapseEl = this.navCollapse?.nativeElement;
    if (collapseEl && collapseEl.classList.contains('show')) {
      // Use Bootstrap's Collapse API if available, otherwise toggle class manually
      const bsCollapse = (window as any).bootstrap?.Collapse?.getInstance(collapseEl);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        collapseEl.classList.remove('show');
      }
    }
  }
}
