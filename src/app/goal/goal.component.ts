import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';


@Component({
    selector: 'app-goal',
    templateUrl: './goal.component.html',
    styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {


    goals = [
        new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2018,7,14)),
        new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2018,6,9)),
        new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2018,1,12)),
        new Goal(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2018,0,18)),
        new Goal(5, 'Solve math homework','Damn Math',new Date(2018,2,14)),
        new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2018,3,14)),
    ]

    /* 
    Function that takes index of a goal from the template
    */
    toogleDetails(index){
        /* Use index from template to locate goal
           Target the showDescription property and convert from false to true and vice verca
        */
        this.goals[index].showDescription = !this.goals[index].showDescription;
    }

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

    // Function that takes the boolean value emitted by child component and index of the goal
    deleteGoal(isComplete, index) {

        // Check if event emitted by child is present / check for isComplete
        if(isComplete) {

            // Create browser prompt to confirm if the user wants to delete the goal

            let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name} ?`);

            // If user confirms deletion
            if (toDelete) {

                // Use splice to remove goal from goals using the index
                this.goals.splice(index,1)
            }
        }
    }

    // Function that takes goal object as input
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

    constructor() { }

    ngOnInit() {
    }

}
