import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Property Management App';
  properties: any;
  property: any;
  owner: any;
  idOwner: number | undefined;


  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
      this.getProperties();
  }

  getProperties() {
      this.http.get("http://localhost:15863/property").subscribe(response => {
        this.properties = response;
      }, error => {
        console.log(error);
      });
  }

  getProperty(propertyId: number) {
    this.http.get("http://localhost:15863/property/" + propertyId).subscribe(response => {
      this.property = response;
    }, error => {
      console.log(error);
    });
  }

  getOwner(ownerId: number){
    this.http.get("http://localhost:15863/owner/" + ownerId).subscribe(respone => {
      this.owner = respone;
      alert("Owner's name is "+ this.owner.name + " and she/he is " + this.owner.age + " years old.")
    }, error => {
      console.log(error);
    });    
  }
}
