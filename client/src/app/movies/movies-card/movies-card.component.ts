import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit {
  @Input() movie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
