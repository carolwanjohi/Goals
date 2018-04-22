import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Goal} from '../goal';

// Import GoalService to use Goal service
import { GoalService } from '../goals/goal.service';

// Import ActivatedRoute and ParamMap for routing
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-goal-details',
    templateUrl: './goal-details.component.html',
    styleUrls: ['./goal-details.component.css'],
    providers: [GoalService], // Add GoalService in providers array
})

export class GoalDetailsComponent implements OnInit {

    // Create goalToChild property of type Goal
    goalToChild:Goal;

    /*
        Inject GoalService by creating property injectGoalService with type GoalService

        Inject ActivatedRoute service by creating property injectActivatedRoute with type ActivatedRoute
    */

    constructor(private injectGoalService:GoalService, private injectActivatedRoute:ActivatedRoute) { }

    ngOnInit() {

        /*
            Create id value
                - use snapshot to get initial value of the route parameter
                - use get method by ParamMap to extract id parameter
        */
        let id = this.injectActivatedRoute.snapshot.paramMap.get('id')

        // Pass id to getGoal method of GoalService and assign it to goalToChild property
        this.goalToChild = this.injectGoalService.getGoal(id)
    }

}

    // @Input() goalToChild:Goal;

    // // Create evet emmitter with a boolean type
    // @Output() isComplete = new EventEmitter<boolean>()

    // // // Get input that is a boolean
    // // goalComplete(complete:boolean){

    // //     // Use emit method to pass event to parent component / send input complete to parent component
    // //     this.isComplete.emit(complete);
    // // }

    // // Get input that is a boolean
    // goalDelete(complete:boolean){

    //     // Use emit method of Event Emitter to pass event to parent component / send input complete to parent component
    //     this.isComplete.emit(complete)
    // }
