(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
         cannon.create.onTop(225);
         cannon.create.onTop(500);
         cannon.create.onTop(552);
         cannon.create.onTop(65);
         cannon.create.onTop(350);
         cannon.create.onTop(700);
        cannon.create.onBottom(85);
        cannon.create.onBottom(333);
        cannon.create.onLeft(95);
        cannon.create.onLeft(325);
        cannon.create.onBottom(700);
       
        // example: 
        cannon.create.onTop(225);
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
