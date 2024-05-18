//asynchronous behaviours
const demoAsync = () => {
    console.log("Before waiting");
    setTimeout(() => {
        
    }, 5000);
    console.log("After waiting");
};

demoAsync();

const demoAsyncWithCallback = () => {
    console.log("Before waiting");
    setTimeout(() => {
        console.log("After waiting");       
    }, 5000);

};
demoAsyncWithCallback();

const demoAsyncWithAnonymousCallback = () => {
    console.log("Before waiting");
    setTimeout(function() {
        console.log("After waiting");        
    }, 5000);
};
demoAsyncWithAnonymousCallback();