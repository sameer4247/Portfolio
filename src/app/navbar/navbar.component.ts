import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  scrolled: boolean = false;

  @HostListener('window:scroll') onScroll() {
    console.log(window.scrollY);
    this.scrolled = window.scrollY > 10 && window.innerWidth > 720;
  }
}
