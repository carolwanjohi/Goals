import { Injectable } from '@angular/core';

@Injectable()
export class AlertsService {

    constructor() { }

    // Create method that desplays the string passed in an alert

    alertMe(message:string) {
        alert(message)
    }

}
