import { Injectable } from '@angular/core';

// Import Goals array
import {Goals} from '../goals';

@Injectable()

export class GoalService {

    constructor() { }    

    // Method that returns the Goals array 
    getGoals() {

        return Goals;

    }

    // Method that takes an id of a goal and returns it
    getGoal(id) {

        // Loop through the Goals and store each item as goal
        for(let goal of Goals) {

            // Check if the goal has the same id as the argument id
            if(goal.id == id) {

                // Return goal with the same id
                return goal

            }

        }
        
    }

}
