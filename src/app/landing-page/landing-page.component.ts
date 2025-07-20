import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

CommonModule;

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {

  constructor(private router: Router) {}

  cardContents: any = [
    {
      title: 'Love what you do',
      image: '/assets/career-banner-1.jpg',
      alt: 'love what you do',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at expedita reiciendis nesciunt, voluptate laborum odio ab ratione! Veritatis placeat officiis nihil soluta id dicta exercitationem error iure earum quia..',
    },
    {
      title: 'Excel your coding skills',
      image: '/assets/career-banner-2.jpg',
      alt: 'excel your skill',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at expedita reiciendis nesciunt, voluptate laborum odio ab ratione! Veritatis placeat officiis nihil soluta id dicta exercitationem error iure earum quia..',
    },
    {
      title: 'Work anywhere anytime',
      image: '/assets/career-banner-3.jpg',
      alt: 'work anywhere',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at expedita reiciendis nesciunt, voluptate laborum odio ab ratione! Veritatis placeat officiis nihil soluta id dicta exercitationem error iure earum quia..',
    },
    {
      title: 'Find your suitable job',
      image: '/assets/career-banner-4.jpg',
      alt: 'work anywhere',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at expedita reiciendis nesciunt, voluptate laborum odio ab ratione! Veritatis placeat officiis nihil soluta id dicta exercitationem error iure earum quia..',
    },
  ];

  login(){
    this.router.navigate(['login']);
  }
}
