import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http: Http, private httpModule: HttpModule) {
  }

  getGithubUsers(searchText: string): Observable<any> {
    const gitHubApiUrl = 'http://api.github.com/search/users?q=' + searchText;
    return this.http.get(gitHubApiUrl).map(
      resp => {
        const data = resp.json();
        return data;
      }
    );
  }

  getGithubUserDetails(userId: string): Observable<any> {
    const gitHubApiUserUrl = 'http://api.github.com/users/' + userId;
    return this.http.get(gitHubApiUserUrl).map(
      resp => {
        const data = resp.json();
        return data;
      }
    );
  }


}
