import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github/github.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../search/search.component.css'],
  providers: [GithubService]
})
export class UserComponent implements OnInit {
  public user;
  constructor(private activatedRoute: ActivatedRoute, private gitHubService: GithubService) { }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params['userId'];
    this.gitHubService.getGithubUserDetails(userId).subscribe(
      res => {
        this.user = res;
      }
    );
  }

}
