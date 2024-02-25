// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //stop  and run next function 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

