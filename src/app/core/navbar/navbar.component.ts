import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  numVotes = 0

  constructor(private VoteService: VoteService) {

    VoteService.voteCount$.subscribe(votes => {
      this.numVotes = votes;
      console.log(votes)
    })

  }

  ngOnInit() {
    console.log(this.VoteService);
  }

}
