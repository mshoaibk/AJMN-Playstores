export const environment = {
    //-------------base----------//
    ApiUrl_base: 'http://localhost:5261',


    //----------------api's------------//
  //controller : App
  GetAppListByCategoryId :  '/api/App/GetAppListByCategoryId',
    
    
    //controller : Category
    GetCategories_List :  '/api/Category/GetCategories_List',
    
   
   
     //controller : Xyz
     ApiUrl: function(endpoint: string) {
       return `${environment.ApiUrl_base}${endpoint}`;
   },
  version: '1.0.0'
};