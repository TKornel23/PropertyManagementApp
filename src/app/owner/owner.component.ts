import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  owner: any;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  getOwner(ownerId: number){
    this.http.get("http://localhost:15863/owner/" + ownerId).subscribe(respone => {
      this.owner;
    }, error => {
      console.log(error);
    });    
  }
}
