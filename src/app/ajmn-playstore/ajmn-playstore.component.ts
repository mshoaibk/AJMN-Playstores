import { Component, ElementRef, } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CommonService } from './services/common.service';
import { forkJoin } from 'rxjs';
import { ImageUrlGanateterService } from './services/image-url-ganateter.service';

@Component({
  selector: 'app-ajmn-playstore',
  templateUrl: './ajmn-playstore.component.html',
  styleUrls: ['./ajmn-playstore.component.scss'],
})
export class AjmnPlaystoreComponent {
  categoryData: { heading: string; Apps: { id: any; productName: string; productDesc: string; bannerImage: string; logoImage: string }[] }[] = [];
  activeTabIndex: number = 0;
  slideShowList:any=[];
  constructor(private commonService: CommonService,
    private elementRef: ElementRef,
    public ImageUrlGanateterService : ImageUrlGanateterService
    ) {}
    prevSlide(): void {
      const carousel = this.elementRef.nativeElement.querySelector('.carousel-control-prev');
      if (carousel) {
        carousel.dispatchEvent(new Event('click'));
      }
    }
  
    nextSlide(): void {
      const carousel = this.elementRef.nativeElement.querySelector('.carousel-control-next');
      if (carousel) {
        carousel.dispatchEvent(new Event('click'));
      }
    }
  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }

  ngOnInit() {


    this.getSlideShowdata()
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
  getSlideShowdata(){
    let url = environment.ApiUrl(environment.GetAppListForSlideShow);
              this.commonService.get(url).subscribe((res: any) => {
              if(res.status){
                this.slideShowList = res.appList;
              }
              })
  }
}

