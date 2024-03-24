import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { ImageUrlGanateterService } from '../services/image-url-ganateter.service';
import { environment } from 'src/environments/environment.development';
import { CommonService } from '../services/common.service';
import { FileDownloadService } from '../services/file-download.service';
import { UserContextService } from '../services/user-context.service';


@Component({
  selector: 'app-ajmn-detail',
  templateUrl: './ajmn-detail.component.html',
  styleUrls: ['./ajmn-detail.component.scss']
})
export class AjmnDetailComponent implements OnInit {
  @ViewChild('dropdownMenu', { static: true }) dropdownMenu!: ElementRef;
  isDropdownOpen = false;
  reviewModel:any={};
  username:string=''
  AppReviewsList:any=[];
  constructor(
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    //private apiService: ApiService // Inject ApiService or your service name for fetching data
    public imageUrlGanateterService: ImageUrlGanateterService,
    private fileDownloadService: FileDownloadService,
    private commonService: CommonService,
    private userContextService: UserContextService,
    
  ) {
    this.username = this.userContextService.user$._value== null?'':this.userContextService.user$?._value.userinfo.surname;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  appDetailsModel:any={};
  
  
  logoimageUrl: string='';
  bannerimageUrls: string[] = [];
  screenshotimageUrls: string[] = [];

  

  appId: any;
  showEnglishSection = true;
   

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.appId = params['id'];
      console.log(this.appId);
      this.fetchAppDetails(this.appId);
      this.fetchAppReview(this.appId)
    });
  }

  toggleLanguage() {
    this.showEnglishSection = !this.showEnglishSection;
  }

  fetchAppDetails(id: any) {
    let url = environment.ApiUrl(environment.GetAppDetailsById+"/"+id);
    this.commonService.get(url).subscribe((responseData: any) => {
      console.log(responseData);
      this.appDetailsModel = {
        "appId": responseData.data.appId,
        "categoryName": responseData.data.categoryName,
        "appName": responseData.data.appName,
        "description": responseData.data.description,
        "isDeleted": responseData.data.isDeleted,
        "features_Eng": responseData.data.features_Eng,
        "features_Ar": responseData.data.features_Ar,
        "userGuide_Eng": responseData.data.userGuide_Eng,
        "userGuide_Ar": responseData.data.userGuide_Ar,
        "logoUrl": responseData.data.logoUrl,
        "bannerUrls": responseData.data.bannerUrls,
        "screenshotUrls": responseData.data.screenshotUrls,
        "appPlatformFiles": responseData.data.appPlatformFiles.map((file: any) => ({
          "id": file.id,
          "platName": file.platName,
          "platformLogo": file.platformLogo,
          "filePath": file.filePath,
          "version": file.version,
          "size": file.size,
          "publishedDate": file.publishedDate,
          "isExternal": file.isExternal
        }))
      };
      console.log("appDetailsModel",this.appDetailsModel)
    })
  }
  downloadFile(model:any){
   if(model.isExternal){
    //redirect

   }
   else{
    //download
    const url = environment.ApiUrl(environment.GetFilePath_ById + "/" + model.id);
    this.commonService.get(url).subscribe((responseData: any) => {
      if (responseData.status) {
        this.fileDownloadService.downloadFile(responseData.fileDataBase64, "xyz",'application/zip');
      }
    });
   }
  }

  PostReview(){
    let model = {
      "appId": this.appId,
      "review":  this.reviewModel.Review,
      "userName": this.username
    }
    let url = environment.ApiUrl(environment.PostReview);
    this.commonService.post(url,model).subscribe((responseData: any) => {
      console.log(responseData)
      if(responseData.status){
        this.reviewModel.Review = '';
        this.fetchAppReview(this.appId)
      }
    });
    }
  fetchAppReview(_appid:any){
    let url = environment.ApiUrl(environment.GetAppReviews+"/"+_appid);
    this.commonService.get(url).subscribe((responseData: any) => {
      if(responseData.status){
        debugger
        this.AppReviewsList = responseData.reviews
      }
    })
    }
  }

