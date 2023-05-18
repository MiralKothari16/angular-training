import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user !: { id: string; name: string };

  constructor(private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.Route.snapshot.params['id'],
      name: this.Route.snapshot.params['name'],
    }

  }

}
