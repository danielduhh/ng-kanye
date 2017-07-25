import { Component } from '@angular/core';
import { VoteService } from './core/vote.service';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    private store: Store<fromRoot.State>
  ) {
    
    VoteService.voteCount$.subscribe(votes => {
      this.numVotes = votes;
    })
    let params = this.route.snapshot.params;
  }
}
