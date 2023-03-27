import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epf-locator';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const body = {"ios":"100", "lan":"EN","ver":"100"};
    this.http.post('https://secure.kwsp.gov.my/m2/postBranchLocation', body)
    .subscribe((res) => {
      console.log(res);
    })
  }
}
