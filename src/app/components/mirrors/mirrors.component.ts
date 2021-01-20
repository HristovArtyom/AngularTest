import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mirrors',
  templateUrl: './mirrors.component.html',
  styleUrls: ['./mirrors.component.css'],
})
export class MirrorsComponent implements OnInit {
  name: string;
  color: string;
  price: number;
  size: Size;
  options: string[];
  individualLenght: number;
  individualHeight: number;
  phoneNumber: number;

  constructor() {}

  ngOnInit(): void {
    this.name = '---';
    this.color = '---';
    this.price = 0;
    this.size = {
      length: 0,
      height: 0,
      width: 0,
    };
    this.options = ['---', '---', '---'];
    this.individualLenght;
    this.individualHeight;
    this.phoneNumber;
  }
  addNew(length, height, phone) {
    this.individualLenght = length;
    this.individualHeight = height;
    this.phoneNumber = phone;
    return false;
  }

  mirrorSelect(mirrorTitle) {
    if (mirrorTitle === 'black') {
      this.name = 'Rotonda';
      this.color = 'Black';
      this.price = 100;
      this.size = {
        length: 70,
        height: 70,
        width: 5,
      };
      this.options = ['Дерево', 'Эко-кожа', 'Зеркало'];
    } else if (mirrorTitle === 'gold') {
      this.name = 'Aztec';
      this.color = 'Gold';
      this.price = 150;
      this.size = {
        length: 60,
        height: 60,
        width: 5,
      };
      this.options = ['Дерево', 'Перо', 'Зеркало'];
    } else if (mirrorTitle === 'silver') {
      this.name = 'Mixtec';
      this.color = 'Silver';
      this.price = 170;
      this.size = {
        length: 70,
        height: 70,
        width: 5,
      };
      this.options = ['Дерево', 'Перо', 'Зеркало'];
    } else {
      this.name = 'San Rufo';
      this.color = 'Beige';
      this.price = 120;
      this.size = {
        length: 70,
        height: 70,
        width: 5,
      };
      this.options = ['Дерево', 'Эко-кожа', 'Зеркало'];
    }
  }
}

interface Size {
  length: number;
  height: number;
  width: number;
}
