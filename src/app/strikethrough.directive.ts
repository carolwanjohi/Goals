import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appStrikethrough]'
})

export class StrikethroughDirective {

    /* 
    Create property elem that is of ElementRef type and cannot be accessed outside of the class

    Property will be the element the directive will be hosted on : in this case li element

    */
    constructor(private elem:ElementRef) {}

    // Capture evnets that occur on the host element

    // If host element is clicked once
    @HostListener("click") onClicks(){

        // Call textDeco function and pass in CSS style attribute line-through
        this.textDeco("line-through");
    }


    // If host element is double clicked 
    @HostListener("dblclick") onDoubleClicks(){

        // Call textDeco function and pass in CSS style attribute none
        this.textDeco("none");
    }

    /*
    Function that takes the a CSS Style Attribute as input/an argument

    Cannot be accessed outside of the class
    */
    private textDeco(action:string) {

        // Target host element style attribute and change textDecoration
        this.elem.nativeElement.style.textDecoration =action;

    }

}
