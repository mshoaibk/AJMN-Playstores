import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-ajmn-playstore',
  templateUrl: './ajmn-playstore.component.html',
  styleUrls: ['./ajmn-playstore.component.scss'],
})
export class AjmnPlaystoreComponent {
  versionsData: { heading: string; versions: { id: any; productName: string; productDesc: string; bannerImage: string; logoImage: string }[] }[] = [];
  activeTabIndex: number = 0;

  constructor(private commonService: CommonService) {}

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }

  ngOnInit() {
    this.activeTabIndex = 1;
    let Appurl = environment.ApiUrl(environment.GetAppListByCategoryId);
    let url = environment.ApiUrl(environment.GetCategories_List);
debugger;
    this.commonService.get(url).subscribe((res: any) => {
      console.log(res);
      if (res.status) {
        res.categoryList.forEach((category: any) => {
          console.log(`ID: ${category.id}, Name: ${category.name.trim()}`);
          let apps: any[] = [];
          this.commonService.get(Appurl + "/" + category.id).subscribe((Appres: any) => {
            if (Appres.status) {
              Appres.appList.forEach((app: any) => {
                apps.push({
                  id: app.id,
                  productName: app.productName,
                  productDesc: app.productDesc,
                  bannerImage: app.bannerImage,
                  logoImage: app.logoImage
                });
              });
              this.versionsData.push({
                heading: category.name.trim(),
                versions: apps
              });
            }
          });
        });
      }
    });
  }
}
