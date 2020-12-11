import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit {
  @Input() movie: any;
  card_summary: any;
  constructor() { }

  ngOnInit(): void {
  }
  cropInfoLength() {
    this.card_summary = this.movie.summary
  }

}
