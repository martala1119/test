import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
//import getAccessTokenFromCode from '@salesforce/apex/Authhandle.getAccessTokenFromCode';
//import getToken from from '@salesforce/apex/Authhandle.getacessToken';

export default class Authenticatepage extends LightningElement {
    authCode;
    //recordId;
    @wire(CurrentPageReference)
    currentPageReference;

   
    renderedCallback(){
        console.log(`current page referaence =JSON.Stringify(${this.currentPageReference})`);
        console.log(`c__myParam = ${this.currentPageReference.state.c__myParam}`); 
    }
    
    /*
    authorizationCode = '';

        connectedCallback() {
            const params = new URLSearchParams(window.location.search);
            this.authorizationCode = params.get('code');

            if (this.authorizationCode) {

                console.log('Authorization Code:', this.authorizationCode);
            } else {
                
                console.error('Authorization code not found in URL.');
            }
        }
    
  /*
    @wire(CurrentPageReference)
    currentPageReference({data,error}){
        if(data){
            console.log(`code = ${this.currentPageReference.state.code}`); 
        }
    }

    connectedCallback() {      
        console.log(`c__myParam = ${this.currentPageReference.state.code}`); 
    }

    /*@wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
        if (currentPageReference && currentPageReference.state) {
            this.authCode = currentPageReference.state.c__code;
            this.recordId = currentPageReference.state.state;

            console.log('Authorization Code:', this.authCode);
           // console.log('Record ID:', this.recordId);
         /*
            if (this.authCode && this.recordId) {
                // Apex call to exchange auth code for access token
                getAccessTokenFromCode({
                    code: this.authCode
                    
                    
                    clientId: '3MVG9k02hQhyUgQDyFbANomPFNyfWwhCKLbS4oHi3LU7a6KflixCqcpddeacUY.PMx01K3kxySRveHqLj4Pcw',
                    clientSecret: '2809F64E5317B22BACB3FD7E45E661130F07C0057EEED04DC2618339DBF9480E',
                    redirectUri: 'https://abcd634-dev-ed.develop.my.salesforce.com/lightning/cmp/c__authenticatepage'
        
                })
               
            }
                
        }
    }

  

/*
connectedCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    this.authCode = urlParams.get('code');
    console.log('Auth Code:', this.authCode);

    } */
}