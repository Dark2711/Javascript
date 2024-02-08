// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`hello Spiderman`);
})();

//firts parenthesis to wrap function in it()
// second parenthesis to execute the function()

( (name) => {
    // unnamed IIFE
    console.log(`hello ${name}`);
})('Prince')