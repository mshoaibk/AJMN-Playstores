import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-ajmn-detail',
  templateUrl: './ajmn-detail.component.html',
  styleUrls: ['./ajmn-detail.component.scss']
})
export class AjmnDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    //private apiService: ApiService // Inject ApiService or your service name for fetching data
  ) {}

  appId: any;
  showEnglishSection = true;
  appDetails: any; // Assuming you want to fetch details of the app

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.appId = params['id'];
      console.log(this.appId);
      // Now you can use this.id in your component
      // Assuming you want to fetch details of the app based on appId
      this.fetchAppDetails(this.appId);
    });
  }

  toggleLanguage() {
    this.showEnglishSection = !this.showEnglishSection;
  }

  fetchAppDetails(id: any) {
    // Assuming you have a method in ApiService to fetch app details by ID
    // this.apiService.getAppDetails(id).subscribe(
    //   (response: any) => {
    //     this.appDetails = response;
    //     // Handle response or assign it to any variable to use in your template
    //   },
    //   (error: any) => {
    //     console.error(error);
    //     // Handle error
    //   }
    // );
  }
}
