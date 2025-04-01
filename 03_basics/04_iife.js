// #IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // semicolon is important if multiple iife is used

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('ujjwal')

