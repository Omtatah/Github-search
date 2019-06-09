import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: string[];

  constructor() {
    this.images = ['https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.atom.io%2Fimg%2Fposts%2Fgithub-for-atom.png&imgrefurl=https%3A%2F%2Fblog.atom.io%2F2017%2F05%2F16%2Fgit-and-github-integration-comes-to-atom.html&docid=w5ArDFOjuy4BEM&tbnid=HrgBwKj--LpOPM%3A&vet=10ahUKEwjDkuuWqdziAhVGCxoKHfOlAT8QMwiQASgYMBg..i&w=1560&h=600&bih=620&biw=1299&q=github%20images&ved=0ahUKEwjDkuuWqdziAhVGCxoKHfOlAT8QMwiQASgYMBg&iact=mrc&uact=8']
  }
  ngOnInit() {
  }

}
