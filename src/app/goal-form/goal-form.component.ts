import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
    selector: 'app-goal-form',
    templateUrl: './goal-form.component.html',
    styleUrls: ['./goal-form.component.css']
})

export class GoalFormComponent implements OnInit {

    // Create property that will be the default goal object to be changed by form input
    newGoal = new Goal(0,"","",new Date());

    // Create event emitter with type Goal
    @Output() addGoal = new EventEmitter<Goal>();

    // Create function that has no input
    submitGoal(){

        // Call emit method on addGoal event emitter and pass in newGoal property to be sent to parent component
        this.addGoal.emit(this.newGoal);

    }

    constructor() { }

    ngOnInit() {
    }

}
