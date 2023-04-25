import { Component } from '@angular/core';
//import Interface
import { ICards } from '../Icards.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  public bookList: ICards[] = [
    {
      imageUrl: "https://thumbs.dreamstime.com/b/open-book-hardback-books-wooden-table-education-background-back-to-school-copy-space-text-76106466.jpg",
      title: 'leaf Bass wireless headphones',
      description: '',
      price: 39000.00,
      imghref: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwESzJTW79IanPqG2oHqvehoWabFAtWDV_Wa60ffLXrA&usqp=CAU&ec=48600112'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_VubWxMFA-3vVvUjrzaF3j5ZV9mIkxoLUJlwok7Wgw&usqp=CAU&ec=48600112',
      title: 'leaf Bass wireless headphones',
      description: '',
      price: 39000.00,
      imghref: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwESzJTW79IanPqG2oHqvehoWabFAtWDV_Wa60ffLXrA&usqp=CAU&ec=48600112'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwEx_bfbP9VsmB6P_zaF61Yst7St6DXF05oTHCILMEA&usqp=CAU&ec=48600112',
      title: 'leaf Bass wireless headphones',
      description: '',
      price: 39000.00,
      imghref: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwESzJTW79IanPqG2oHqvehoWabFAtWDV_Wa60ffLXrA&usqp=CAU&ec=48600112'
    },
  ];
}
