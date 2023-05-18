import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // user !: { id: string; name: string };

  // use for step 1constructor(private router: Router) { }// gives ovverall rouuting convept  
  constructor(private router: ActivatedRoute) { }// to get current route

  ngOnInit(): void {
    // this.user = {
    //   id: this.router.snapshot.params['id'],
    //   name: this.router.snapshot.params['name'],
    // };
  }
  onCategoriesClick() {
    // use for step 1 this.router.navigateByUrl('/categories'); both options arre same 
    // use for step 2 this.router.navigate(['/categories']);// it gives array type of data. u can pass id or any things.
  }

}
