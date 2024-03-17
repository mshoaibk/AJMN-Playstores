import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class PublicComponent implements OnInit {
  @Input() versions!: { productName: string; productDesc: string; }[];
  @Input() heading!: string;

  ngOnInit() {
    console.log("Versions:", this.versions);
    console.log("Heading:", this.heading);
  }
}
