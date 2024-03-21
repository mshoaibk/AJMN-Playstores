import { Component, } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CommonService } from './services/common.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-ajmn-playstore',
  templateUrl: './ajmn-playstore.component.html',
  styleUrls: ['./ajmn-playstore.component.scss'],
})
export class AjmnPlaystoreComponent {
  categoryData: { heading: string; Apps: { id: any; productName: string; productDesc: string; bannerImage: string; logoImage: string }[] }[] = [];
  activeTabIndex: number = 0;

  constructor(private commonService: CommonService,
   
    ) {}

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }

  ngOnInit() {



this.activeTabIndex = 0;
let Appurl = environment.ApiUrl(environment.GetAppListByCategoryId);
let url = environment.ApiUrl(environment.GetCategories_List);
this.commonService.get(url).subscribe((res: any) => {
  console.log(res);
  if (res.status) {
    forkJoin(res.categoryList.map((category: any) =>
      this.commonService.get(Appurl + "/" + category.id)
    )).subscribe((appResponses: any) => {
      appResponses.forEach((Appres: any, index: number) => {
        const category = res.categoryList[index];
        if (Appres.status) {
          const apps = Appres.appList.map((app: any) => ({
            id: app.id,
            productName: app.productName,
            productDesc: app.productDesc,
            bannerImage: app.bannerImage,
            logoImage: app.logoImage
          }));
          this.categoryData.push({
            heading: category.name.trim(),
            Apps: apps
          });
        }
      });
    });
  }
});


    
    
  }
}
