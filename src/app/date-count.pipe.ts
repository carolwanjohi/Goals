import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateCount'
})

export class DateCountPipe implements PipeTransform {

    // Get date from the template and assign it to type number
    transform(value: any):number{
        
        // Get today's date
        let today = new Date();

        // Get today's date without Time
        let todayWithNoTime:any = new Date( today.getFullYear(), today.getMonth(), today.getDate());

        // Get difference between date on template and today and return in miliseconds
        var dateDifference  = Math.abs(value-todayWithNoTime);

        // Convert miliseconds to seconds
        var dateDifferenceSeconds = dateDifference * 0.001;

        // No. of seconds in a day
        const secondsInADay = 86400;

        // Get numbers of days left
        var dateCounter = dateDifferenceSeconds / secondsInADay;

        // Check if number of days left is greater than or equal to 1
        if(dateCounter >= 1){

            // Display no. of days left
            return dateCounter;

        }else {

            // Display 0 since the due day has passed
            return 0;

        }

    }

}
