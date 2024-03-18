import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-ajmn-playstore',
  templateUrl: './ajmn-playstore.component.html',
  styleUrls: ['./ajmn-playstore.component.scss'],
})
export class AjmnPlaystoreComponent {
  constructor(
    private commonService: CommonService
  ){

  }
  categoryData!: { heading: string; Apps: { productName: string; productDesc: string; }[] }[];
  activeTabIndex: number = 0;
  @ViewChild('firstButton') firstButton!: ElementRef;
  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
  ngOnInit() {
    this.activeTabIndex = 0;
   
    // Structure your data with headings
    let Appurl = environment.ApiUrl(environment.GetAppListByCategoryId);
    
    //gatCategory

    let url = environment.ApiUrl(environment.GetCategories_List);
    this.commonService.get(url).subscribe((res:any)=>{
      console.log(res);
      if(res.status){
        
         res.categoryList.forEach((category: any) => {
          console.log(`ID: ${category.id}, Name: ${category.name.trim()}`);
        
          let apps: any[] = [];
          this.commonService.get(Appurl+"/"+category.id).subscribe((Appres:any)=>{
            if(res.status){
              
            }
          })

        });
      }
    })
    this.categoryData = [
      {
        heading: "Public",
        Apps: [
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
        Apps: [
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
        Apps: [
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
    setTimeout(() => {
      this.firstButton.nativeElement.click();
    });
  }

}
