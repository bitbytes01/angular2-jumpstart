import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService]
})
export class SearchComponent implements OnInit {

  public searchText;
  public searchResult;
  public searchCount;

  constructor(private gitHubService: GithubService, private router: Router) { }

  ngOnInit() {
  }

  showUserDetail(user) {
    this.router.navigate(['user', user.login]);
  }

  onKeyup(event) {
    this.searchText = event.target.value;
  }

  getGitHubUsers() {
    this.gitHubService.getGithubUsers(this.searchText).subscribe(
      res => {
        this.searchResult = res;
        this.searchCount = res.total_count;
      }
    );
  }
}
