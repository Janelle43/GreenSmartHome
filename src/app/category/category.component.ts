import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  photos = [{name: ' ', url: 'https://wifi.kz/upload/medialibrary/869/ee7a0lweogdggpucuwrsag3shhg.jpeg'},
    {name: '', url: 'https://www.iphones.ru/wp-content/uploads/2019/02/smart-home-1240x630.jpg'},
    {name: '',  url: 'https://cdn.lifehacker.ru/wp-content/uploads/2019/07/safety.com__1564559367.jpg'}
  ];
  constructor() {

  }

  ngOnInit(): void {
       }
}
