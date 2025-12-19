import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallary',
  imports: [CommonModule],
  templateUrl: './gallary.html',
  styleUrl: './gallary.css',
})
export class Gallary {
  
  constructor(private router: Router) {}
  
  goBack(): void {
    this.router.navigate(['/landing']);
  }
  
  images = [
   
    {
      url: 'https://i.pinimg.com/1200x/55/22/1c/55221c4acc39b9198f267807e9f1b57c.jpg',
      title: 'Master Bedroom',
      description: 'Elegant master suite with panoramic city views'
    },
  
    {
      url: 'https://i.pinimg.com/1200x/4c/c1/9c/4cc19c079fd6623fb65a135866a85dc7.jpg',
      title: 'Modern Kitchen',
      description: 'Contemporary kitchen with island and premium appliances'
    },
    {
      url: 'https://i.pinimg.com/736x/31/fd/a5/31fda535b69c5d342412536c074a8232.jpg',
      title: 'Elegant Bedroom',
      description: 'Sophisticated bedroom with luxurious textiles and decor'
    },
    {
      url: 'https://i.pinimg.com/1200x/03/51/60/035160ceb2380c07e2b6e5a2c704c3fd.jpg',
      title: 'Luxury Suite',
      description: 'Spacious suite with panoramic windows and modern furnishings'
    },
    {
      url: 'https://i.pinimg.com/736x/90/3a/61/903a61a4fee0150f8581cb78807a9f85.jpg',
      title: 'Designer Living Room',
      description: 'High-end living space with designer furniture and art'
    },
    {
      url: 'https://i.pinimg.com/1200x/e0/39/12/e039122635403492b62e800ec9e6aba7.jpg',
      title: 'Penthouse View',
      description: 'Exclusive penthouse with breathtaking city skyline views'
    },
    {
      url: 'https://i.pinimg.com/1200x/7f/15/80/7f15803cc853142af8b4f0c75c33c65f.jpg',
      title: 'Marble Bathroom',
      description: 'Luxurious bathroom with marble finishes and modern fixtures'
    },
    {
      url: 'https://i.pinimg.com/736x/22/e9/22/22e922640c7450433cb3a61d41e8655c.jpg',
      title: 'Gourmet Dining',
      description: 'Elegant dining area with premium materials and lighting'
    },
    {
      url: 'https://i.pinimg.com/736x/69/36/74/6936746e50cfb894ae4a3e7c85b27ba8.jpg',
      title: 'City View Terrace',
      description: 'Private terrace with stunning urban landscape views'
    },
    {
      url: 'https://i.pinimg.com/1200x/74/e4/a5/74e4a573ea294d400c7bea174ad350dd.jpg',
      title: 'Executive Suite',
      description: 'Premium suite with executive amenities and sophisticated design'
    },
    {
      url: 'https://i.pinimg.com/736x/4a/fa/81/4afa81c6a19c9a2284342a2464115561.jpg',
      title: 'Sky Lounge',
      description: 'Exclusive lounge area with panoramic city and sky views'
    },
    {
      url: 'https://i.pinimg.com/474x/05/fc/9d/05fc9d39ac383eea6b85c0321771c326.jpg',
      title: 'Sky view balcony',
      description: 'Exclusive lounge area with panoramic city and sky views'
    }

  ];

}
