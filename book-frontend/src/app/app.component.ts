import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  pageTitle = 'Library Frontend';
  
  title = new FormControl(''); 
  author = new FormControl('');
  
  data: any[] = [];
  constructor(private service: DataServiceService) {
    
  }

  ngOnInit() {
    this.service.getBooks().subscribe((resp: any) => {
      this.data = resp;
   
    });
  }


  addBook(author:string, title:string){
    
    this.service.addBooks(author, title).subscribe((resp: any) => {
      this.data = resp;
   
    });
  }
}
