export const environment = {
    //-------------base----------//
    ApiUrl_base: 'http://localhost:5261',


    //----------------api's------------//
//controller : AppUser
  Login :  '/api/AppUser/Login',

  //controller : App
  GetAppListByCategoryId :  '/api/App/GetAppListByCategoryId',
  GetAppDetailsById :  '/api/App/GetAppDetailsById',
  GetFilePath_ById :  '/api/App/GetFilePath_ById',
  PostReview :  '/api/App/PostReview',
  GetAppReviews :  '/api/App/GetAppReviews',
    
  //controller : Category
  GetCategories_List :  '/api/Category/GetCategories_List',
    
   //msal configration
   msalConfig: {
    auth: {
      clientId: 'e011a5e6-7786d44c07ff4bb5-4ee6-9208-',
      authority: 'htogif-1560netotps://lnli0-44e0-acaf.cn.microsoom/3d49507e-9143c7194be',
      redirectUri: '/',
    },
  },
   
     //controller : Xyz
     ApiUrl: function(endpoint: string) {
       return `${environment.ApiUrl_base}${endpoint}`;
   },
  version: '1.0.0'
};