import { Component, OnInit } from '@angular/core';

// Import Goal class
import { Goal } from '../goal';

// Import Quote class
import { Quote } from '../quote-class/quote';

// Import Goals array
// import {Goals} from '../goals';

// Import GoalService
import { GoalService } from '../goals/goal.service';

// Import AlertsService
import { AlertsService } from '../alert-service/alerts.service'; 

// Import QuoteRequestService
import { QuoteRequestService } from '../quote-http/quote-request.service';

// Impoprt Router module for routing to GoalDetails
import { Router } from '@angular/router';



@Component({
    selector: 'app-goal',
    templateUrl: './goal.component.html',
    styleUrls: ['./goal.component.css'],
    providers: [GoalService, QuoteRequestService] // Add providers to Goal Component
})

export class GoalComponent implements OnInit {

    // Create goals property with the value of Goals array
    // goals = Goals;

    // Create goals property with the type Goal array
    goals: Goal[];

    // Create quote property with the type Quote
    quote: Quote;

    // Create alertService property with type AlertsService
    alertService:AlertsService;

    /*
        Inject GoalService by creating property injectGoalService with type GoalService

        Inject AlertService by creating property injectAlertService with type AlertService

        Inject QuoteRequestService by creating property injectQuoteRequestService with type QuoteRequestService

        Inject Router module by creating property injectRouter with type Router
    */
    constructor(injectGoalService:GoalService, injectAlertService:AlertsService, private injectQuoteRequestService:QuoteRequestService, private injectRouter:Router) { 

        // Call getGoals method on injectGoalService property and assign it to goals property
        this.goals = injectGoalService.getGoals();

        // Make injected service AlertService available to the class
        this.alertService = injectAlertService;
    }

    /*
        Function that takes the id of a goal and navigates to GoalDetails component
    */
    goToUrl(id) {

        // Call navigate method of Router module and pass in goal path and id as the parameter 
        this.injectRouter.navigate(['/goals',id])
    }

    /*
        Function that takes the index of a Goal in the goals array and deletes it from goals array
    */
    deleteGoal(index) {

        // Create browser prompt to confirm if the user wants to delete the goal

        let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name} ?`);

        // If user confirms deletion
        if (toDelete) {

            // Use splice to remove goal from goals using the index
            this.goals.splice(index,1)

            // Call alertMe method on alertService property and pass in the message to be displayed
            this.alertService.alertMe("Goal has been deleted")
        }
    }


    /*
        Function that takes goal object as input
    */
    addNewGoal(goal){

        // Get length of array goals
        let goalLength = this.goals.length;

        // Update id of the goal passed from the child component
        goal.id = goalLength + 1;

        // Set completeDate property to a Date Object
        goal.completeDate = new Date(goal.completeDate);

        // Add new goal to goals
        this.goals.push(goal);

    }


    ngOnInit() {
        // Call quoteRequest method of the QuoteRequestService here so that it is called when the component is initialised
        this.injectQuoteRequestService.quoteRequest()

        // Equate the quote propery of injectQuoteRequestService to quote property of class GoalComponent
        this.quote = this.injectQuoteRequestService.quote

    }

}


        // Create HTTP request here so that it is called when component is initialised

        // Create ApiResponse interface that contains the properties that we want from the response

        // interface ApiResponse{
        //     quote:string;
        //     author:string
        // }
        
        /*
            Call get method of HttpClient and add ApiResponse interface to tell HttpClient the type of response we want

            Call subscribe method of HttpClient and pass in functions data and err
        */
        // this.http.get<ApiResponse>(environment.apiUrl).subscribe(

                /* 
                    Create data function to create Quote instance and with the response properties passed in


                    Assign Quote instance to the quote property
                */
                // data => {
                    
                //     this.quote = new Quote(data.quote, data.author)
                // }, 
                /*
                    Create err function to create Qoute instance when Http Request is unsuccessful

                    Assign Quote instance to the quote property
                */
                // err => {

                //     this.quote = new Quote("Never, never, never give up.", "Wiston Churchill")

                //     console.log("Error Occured When Making Api Request")
                // }

            // )

    /*
        Function that takes event emitted by child and id of a goal from the template
    */
    // completeGoal(isComplete,index){
    //     // Check for isComplete
    //     if(isComplete){
    //         // Use splice to remove array item with index 
    //         this.goals.splice(index,1);
    //     }
    // }

    /*
        Function that takes the boolean value emitted by child component and index of the goal
    */
    // deleteGoal(isComplete, index) {

    //     // Check if event emitted by child is present / check for isComplete
    //     if(isComplete) {

    //         // Create browser prompt to confirm if the user wants to delete the goal

    //         let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name} ?`);

    //         // If user confirms deletion
    //         if (toDelete) {

    //             // Use splice to remove goal from goals using the index
    //             this.goals.splice(index,1)

    //             // Call alertMe method on alertService property and pass in the message to be displayed
    //             this.alertService.alertMe("Goal has been deleted")
    //         }
    //     }
    // }


    /* 
        Function that takes index of a goal from the template
    */
    // toogleDetails(index){
        /* Use index from template to locate goal
           Target the showDescription property and convert from false to true and vice verca
    //     */
    //     this.goals[index].showDescription = !this.goals[index].showDescription;
    // }

