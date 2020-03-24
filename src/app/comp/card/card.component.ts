import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() body: string;
  @Input() currentImage: string;
  @Input() vote: number;

  @Output() upVote = new EventEmitter<number>()
  @Output() downVote = new EventEmitter<number>()
  @Output() prevImage = new EventEmitter<number>()
  @Output() nextImage = new EventEmitter<number>()
  @Output() removed = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  down(id: number) {
    this.downVote.emit(id);
  }

  up(id: number) {
    this.upVote.emit(id);
  }

  prev(id: number) {
    this.prevImage.emit(id);
  }

  next(id: number) {
    this.nextImage.emit(id);
  }

  remove(id: number) {
    this.removed.emit(id);
  }

}
