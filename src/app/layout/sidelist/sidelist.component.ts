import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidelist',
  standalone: true,
  imports: [],
  templateUrl: './sidelist.component.html',
  styleUrl: './sidelist.component.scss'
})
export class SidelistComponent {

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
