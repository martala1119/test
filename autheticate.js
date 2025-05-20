import { LightningElement ,api,wire} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
//import getAccessTokenFromCode from '@salesforce/apex/authclass.getAccessTokenFromCode';
//import getrecordid from '@salesforce/apex/Authhandle.getrecordid';
//import giveurltolwc from '@salesforce/apex/Authhandle.giveurltolwc' ;
import geturl from '@salesforce/apex/Authhandle.geturl';
import updateurl from '@salesforce/apex/Authhandle.updateurl'
export default class Autheticate extends  NavigationMixin(LightningElement) {
    @api recordId;
    url
   // ClientId='3MVG9k02hQhyUgQDyFbANomPFNyfWwhCKLbS4oHi3LU7a6KflixCqcpddeacUY.PMx01K3kxySRveHqLj4Pcw';
    //clientSecret='2809F64E5317B22BACB3FD7E45E661130F07C0057EEED04DC2618339DBF9480E';
   // callbackurl=

   // authURL='https://login.salesforce.com?client_id=3MVG9k02hQhyUgQDyFbANomPFNyfWwhCKLbS4oHi3LU7a6KflixCqcpddeacUY.PMx01K3kxySRveHqLj4Pcw&redirect_uri=https://abcd634-dev-ed.develop.my.salesforce.com//lightning/cmp/c__authenticatepage&response_type=code';
  // authURL='https://login.salesforce.com?client_id=3MVG9k02hQhyUgQDyFbANomPFNyfWwhCKLbS4oHi3LU7a6KflixCqcpddeacUY.PMx01K3kxySRveHqLj4Pcw&redirect_uri=https://abcd634-dev-ed.develop.my.salesforce.com//lightning/cmp/c__authenticatepage&response_type=code';
 //  authURL='https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9k02hQhyUgQDyFbANomPFNyfWwhCKLbS4oHi3LU7a6KflixCqcpddeacUY.PMx01K3kxySRveHqLj4Pcw&redirect_uri=https://abcd634-dev-ed.develop.my.salesforce.com//lightning/cmp/c__authenticatepage&response_type=code';

//authURL ='https://login.salesforce.com';
   
   
   
handleClickAuthenticate(){
             //imperative call 
             console.log('clicked authenticate button ');
             geturl({recordId:this.recordId}).then((result)=>
                {
                     this.url=result;
                     console.log('url is :'+this.url);
                     window.open(this.url); //going to new tab 
                     console.log('url is :'+this.url);
                }).catch(error)
              /*
                updateurl.then((result)=>
                    {
                         this.url=result;
                         console.log('url is :'+this.url);
                         
                    }).catch(error)
                  
   */





 // window.location.href ='https://login.salesforce.com';
     /* this[NavigationMixin.Navigate] ({
            type: 'standard__webPage',
            attributes: {
                url: this.authURL
            }
            },
        true
        );*/

        /*
        @wire(giveurltolwc)    Data({data,error}){
            if(data){
            console.log('data is :'+data);
            this.url=this.url+data;
            }
            else if (error){
                console.log('error is :'+error);
            }
                */
        }
        //I need to pass the authcode , recordid to the apecx class  for auth code i nexed redirect url, clientid,response type,
      
        //imperative call 
    //ClientId=
   // getAccessTokenFromCode({ClientId, clientSecret,callbackurl,recordId,forauthcodebody})
    //.then()
    /*
    getrecordid({recordId})
        .then(result =>{
            console.log('Record ID:',result); })
    */
    }


