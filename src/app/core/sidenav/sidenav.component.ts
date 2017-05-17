import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, Params } from '@angular/router';

import  * as fromRoot from '../reducers'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    let params = this.route.snapshot.params;
    console.log(params);

    // this.route.params.switchMap((params: Params) => console.log(params))
  }

}
