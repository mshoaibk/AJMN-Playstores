import { Component } from '@angular/core';

@Component({
  selector: 'app-ajmn-playstore',
  templateUrl: './ajmn-playstore.component.html',
  styleUrls: ['./ajmn-playstore.component.scss'],
})
export class AjmnPlaystoreComponent {
  versionsData!: { heading: string; versions: { productName: string; productDesc: string; }[] }[];
  activeTabIndex: number = 0;
  ngOnInit() {
    // Structure your data with headings
    this.versionsData = [
      {
        heading: "Public",
        versions: [
          { "productName": "Product X", "productDesc": "Innovative solution for managing enterprise resources efficiently on any device." },
          { "productName": "Product Y", "productDesc": "Comprehensive enterprise resource planning system designed for modern businesses." },
          {
            "productName": "Product W",
            "productDesc": "Powerful ERP solution to enhance productivity and optimize processes."
          },
          {
            "productName": "Product P",
            "productDesc": "Efficiently manage accounts, leaves, and more with our mobile-friendly ERP."
          },
          {
            "productName": "Product Q",
            "productDesc": "Customizable ERP system tailored to meet your business needs."
          },
          {
            "productName": "Product R",
            "productDesc": "Stay ahead of the curve with our cutting-edge enterprise resource planning software."
          },
          {
            "productName": "Product S",
            "productDesc": "Simplify complex business processes with our user-friendly ERP solution."
          },
          {
            "productName": "Product T",
            "productDesc": "Maximize efficiency and profitability with our robust ERP platform."
          },
          {
            "productName": "Product U",
            "productDesc": "Transform your business with our scalable and adaptable ERP solution."
          },
          {
            "productName": "Product V",
            "productDesc": "Optimize resource allocation and management with our ERP software."
          },
          {
            "productName": "Product W",
            "productDesc": "Improve decision-making and strategic planning with our ERP system."
          }
        ]
      },
      {
        heading: "Enterprise",
        versions: [
          { "productName": "Product A", "productDesc": "Enterprise version A description." },
          { "productName": "Product B", "productDesc": "Enterprise version B description." },
          {
            "productName": "Product W",
            "productDesc": "Powerful ERP solution to enhance productivity and optimize processes."
          },
          {
            "productName": "Product P",
            "productDesc": "Efficiently manage accounts, leaves, and more with our mobile-friendly ERP."
          },
          {
            "productName": "Product Q",
            "productDesc": "Customizable ERP system tailored to meet your business needs."
          },
          {
            "productName": "Product R",
            "productDesc": "Stay ahead of the curve with our cutting-edge enterprise resource planning software."
          },
          {
            "productName": "Product S",
            "productDesc": "Simplify complex business processes with our user-friendly ERP solution."
          },
          {
            "productName": "Product T",
            "productDesc": "Maximize efficiency and profitability with our robust ERP platform."
          },
          {
            "productName": "Product U",
            "productDesc": "Transform your business with our scalable and adaptable ERP solution."
          },
          {
            "productName": "Product V",
            "productDesc": "Optimize resource allocation and management with our ERP software."
          },
          {
            "productName": "Product W",
            "productDesc": "Improve decision-making and strategic planning with our ERP system."
          }
        ]
      },
      {
        heading: "Beta",
        versions: [
          { "productName": "Product A", "productDesc": "Enterprise version A description." },
          { "productName": "Product B", "productDesc": "Enterprise version B description." },
          {
            "productName": "Product W",
            "productDesc": "Powerful ERP solution to enhance productivity and optimize processes."
          },
          {
            "productName": "Product P",
            "productDesc": "Efficiently manage accounts, leaves, and more with our mobile-friendly ERP."
          },
          {
            "productName": "Product Q",
            "productDesc": "Customizable ERP system tailored to meet your business needs."
          },
          {
            "productName": "Product R",
            "productDesc": "Stay ahead of the curve with our cutting-edge enterprise resource planning software."
          },
          {
            "productName": "Product S",
            "productDesc": "Simplify complex business processes with our user-friendly ERP solution."
          },
          {
            "productName": "Product T",
            "productDesc": "Maximize efficiency and profitability with our robust ERP platform."
          },
          {
            "productName": "Product U",
            "productDesc": "Transform your business with our scalable and adaptable ERP solution."
          },
          {
            "productName": "Product V",
            "productDesc": "Optimize resource allocation and management with our ERP software."
          },
          {
            "productName": "Product W",
            "productDesc": "Improve decision-making and strategic planning with our ERP system."
          }
        ]
      },
    ];
  }
}
