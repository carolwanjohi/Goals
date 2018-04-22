import { Injectable } from '@angular/core';

// Import HttpClient
import { HttpClient } from '@angular/common/http';

// Import API Url
import { environment } from '../../environments/environment';

// Import Quote class
import { Quote } from '../quote-class/quote';

@Injectable()
export class QuoteRequestService {

    // Create quote property of type Quote
    quote: Quote;

    // Inject HttpClient by creating propery http with type HttpClient
    constructor( private http:HttpClient) {

        // Initialise quote property with empty stings
        this.quote = new Quote("","")
    }

    /*
        Function that defines ApiResponse interface and a promise instance

        Returns the promoise instace created
    */
    quoteRequest(){

        // Create ApiResponse interface that contains the properties that we want from the response

        interface ApiResponse{
            quote:string;
            author:string
        }
        
        // Create promise instance and pass in resolve and reject functions as arguemnts
        let promise = new Promise( (resolve,reject) =>{

            /*
            Call get method of HttpClient and add ApiResponse interface to tell HttpClient the type of response we want

            Call apiUrl from environment object

            Call toPromise function to convert HTTP request to a promise

            Call then function and pass in functions response and error
            */
            this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(

                    /*
                        Create response function to update the quote property values with the response values

                        Call reslove function
                    */
                    response =>{

                        this.quote.quote = response.quote

                        this.quote.author = response.author

                        resolve()
                    },

                    /*
                        Create error fucntion to update quote property with a default quote when Http request is unsuccessful

                        Call reject fucntion and pass in the error value
                    */
                    error => {

                        this.quote.quote = "Never, never, never give up."

                        this.quote.author = "Wiston Churchill"

                        reject(error)
                    }
                )
        })
        
        // Return the promise instance 
        return promise
    }


}
