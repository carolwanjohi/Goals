import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Goal} from '../goal';

@Component({
    selector: 'app-goal-details',
    templateUrl: './goal-details.component.html',
    styleUrls: ['./goal-details.component.css']
})

export class GoalDetailsComponent implements OnInit {

    @Input() goalToChild:Goal;

    // Create evet emmitter with a boolean type
    @Output() isComplete = new EventEmitter<boolean>()

    // // Get input that is a boolean
    // goalComplete(complete:boolean){

    //     // Use emit method to pass event to parent component / send input complete to parent component
    //     this.isComplete.emit(complete);
    // }

    // Get input that is a boolean
    goalDelete(complete:boolean){

        // Use emit method of Event Emitter to pass event to parent component / send input complete to parent component
        this.isComplete.emit(complete)
    }

    constructor() { }

    ngOnInit() {
    }

}
