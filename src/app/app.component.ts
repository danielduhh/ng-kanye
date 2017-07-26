import { Component } from '@angular/core';
import { VoteService } from './core/vote.service';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MdSnackBar} from '@angular/material';
import  * as fromRoot from './core/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numVotes = 0;

  constructor(
    private VoteService: VoteService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRoot.State>,
    private snackBar: MdSnackBar
  ) {

    VoteService.voteCount$.subscribe(votes => {
      this.numVotes = votes;

      if (votes > 5) {
        this.openSnackBar()
      }
    })
    let params = this.route.snapshot.params;
  }

  openSnackBar() {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 2000, // 2 seconds
    });
  }
}

@Component({
  selector: 'app-notification-snack',
  template: `<div>Only 5 votes per 24 hours!<div>`,
  styles: [`div { color: #fff }`],
})
export class NotificationComponent {}
