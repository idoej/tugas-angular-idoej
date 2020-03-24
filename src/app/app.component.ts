import { Component } from '@angular/core';

interface Card {
  id: number;
  title: string;
  body: string;
  vote: number;
  currentImage: string;
  currentImageIdx: number;
  imageList: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  body = '';
  imageStr = '';
  cardList: Card[] = [];

  addCard() {
    const imageUrls = this.imageStr.split(',');
    this.cardList.push({
      id: this.cardList.length + 1,
      title: this.title,
      body: this.body,
      vote: 0,
      currentImageIdx: 0,
      currentImage: imageUrls[0],
      imageList: imageUrls
    });
  }

  upVote(id: number) {
    const idx = this.cardList.findIndex(card => card.id === id);
    this.cardList[idx].vote++;
  }

  downVote(id: number) {
    const idx = this.cardList.findIndex(card => card.id === id);
    this.cardList[idx].vote--;
  }

  prevImage(id: number) {
    const idx = this.cardList.findIndex(card => card.id === id);
    this.cardList[idx].currentImageIdx = (this.cardList[idx].currentImageIdx + 1) % this.cardList[idx].imageList.length;
    this.cardList[idx].currentImage = this.cardList[idx].imageList[this.cardList[idx].currentImageIdx];
    alert(this.cardList[idx].imageList[this.cardList[idx].currentImageIdx]);
  }

  nextImage(id: number) {
    const idx = this.cardList.findIndex(card => card.id === id);
    this.cardList[idx].currentImageIdx = (
      this.cardList[idx].currentImageIdx - 1 + this.cardList[idx].imageList.length
    ) % this.cardList[idx].imageList.length;
    this.cardList[idx].currentImage = this.cardList[idx].imageList[this.cardList[idx].currentImageIdx];
  }

  remove(id: number) {
    const idx = this.cardList.findIndex(card => card.id === id);
    this.cardList.splice(idx, 1);
  }
}
