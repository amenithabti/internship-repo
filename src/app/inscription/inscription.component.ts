import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
fullName="";
username=""; 
password="";
confirm_password="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  create_account(){
      console.log(this.fullName);
      console.log(this.username);
      console.log(this.confirm_password);
      console.log(this.password);

  }
}
