import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { rejects } from 'assert';

const headers = {
  'api-key': '73973DDA32BF0505E54B995190FF5C56'
}
@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
  sm:any;
  searchQuery:any;
  // public url:string="https://searchdoc1.search.windows.net/indexes/search/docs?api-version=2020-06-30&search=";
  public enurl:string="http://40.88.10.243:8000/en_search";
  public rmurl:string="http://40.88.10.243:8000/rm_search";

  // http://104.42.112.166:8000/rm_search
  //public url:string="https://textanalysisbackend.azurewebsites.net/"

  constructor(private _http:HttpClient  ) {

  }
  // public getDetails(payload) {
  //   return new Promise((resolve, reject) => {

  //     this._http.post(this.url + "api",payload)
  //     .subscribe((result: any) => {
  //       if (result.status == 'error') {

  //          }
  //        else {
  //        console.log(result);
  //         resolve( result)
  //       }

  //   })


  // })}


  public getEngResults(data) {

    let payload;
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
     })
    return new Promise((resolve, reject) => {

      payload={"search":data, metadata: []};

      // let data:any = this.searchQuery + '"\"' ;
      // import requests

      // url = "http://104.42.112.166:8000/en_search"

      // payload="{\"search\":\"bat\",\r\n\"metadata\":[]}"
      // payload = {search:this.searchQuery, metadata:[]};
      // headers:HttpHeaders = ({
      //  'Content-Type': 'application/json'
      // })

      // response = requests.request("POST", url, headers=headers, data=payload)

      // print(response.text)


      this._http.post(this.enurl,payload, {headers:headers})
      .subscribe((result: any) => {
        console.log(result.text);
        resolve(result);
        this.sm=result;

    })

  }
  )}

  public getRomResults(data) {
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
     })
    return new Promise((resolve, reject) => {

      let payload={"search":data, metadata: []};

      // let data:any = this.searchQuery + '"\"' ;
      // import requests

      // url = "http://104.42.112.166:8000/en_search"

      // payload="{\"search\":\"bat\",\r\n\"metadata\":[]}"
      // payload = {search:this.searchQuery, metadata:[]};
      // headers:HttpHeaders = ({
      //  'Content-Type': 'application/json'
      // })

      // response = requests.request("POST", url, headers=headers, data=payload)

      // print(response.text)


      this._http.post(this.rmurl,payload, {headers:headers})
      .subscribe((result: any) => {
        console.log(result.text);
        resolve(result);
        this.sm=result;

    })

  }
  )}




}

