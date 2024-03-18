import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class PublicComponent implements OnInit {
  @Input() Apps!: { productName: string; productDesc: string; }[];
  @Input() heading!: string;

  ngOnInit() {
    debugger;
    console.log("Versions:", this.Apps);
    console.log("Heading:", this.heading);
  }
}
