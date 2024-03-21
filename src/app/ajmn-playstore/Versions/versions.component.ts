import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class PublicComponent implements OnInit {
  constructor(
    private router: Router,
  ){

  }
  @Input() Apps!: { id: any; productName: string; productDesc: string; bannerImage: string; logoImage: string }[];
  @Input() heading!: string;

  ngOnInit() {
    console.log("Versions:", this.Apps);
    console.log("Heading:", this.heading);
  }
  ShowDetails(id:any){
    this.router.navigate(['/ajmn-details', id]);
  }
}
