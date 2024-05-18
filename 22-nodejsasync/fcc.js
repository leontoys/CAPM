/* let greet_one = "Hello"
let greet_two = "World!!!"
console.log(greet_one)
for(let i=0;i<1000000000;i++){
}
console.log(greet_two); */

/* let greet_one = "Hello"
let greet_two = "World!!!"
console.log(greet_one)
setTimeout(function(){
    console.log("Asynchronous");
}, 10000)
console.log(greet_two); */

/* function compute(action, x, y){
    if(action === "add"){
        return x+y
    }else if(action === "divide"){
        return x/y
    }
}

console.log(compute("add",10,5))   
console.log(compute("divide",10,5))  */

/* function add(x,y){
    return x+y
}

function divide(x,y){
    return x/y
}

function compute(callBack, x, y){
    return callBack(x,y)
}

console.log(compute(add, 10, 5))    // 2
console.log(compute(divide, 10, 5)) */

//callback hell
/* setTimeout(() =>{
    console.log("One Second");
    setTimeout(() =>{
        console.log("Two Seconds");
        setTimeout(() =>{
            console.log("Three Seconds");
            setTimeout(() =>{
                console.log("Four Seconds");
                setTimeout(() =>{
                    console.log("Five Seconds");
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000) */

/* const request = fetch('https://course-api.com/react-store-products')
console.log(request); */

/* const request = fetch('https://course-api.com/react-store-products').then((response) =>{
    console.log(response);
    return response.json()
}).then((data) =>{
    console.log(data);
}) */

let lottery = new Promise(function(resolve, reject){
    console.log("Lottery is happening");

    setTimeout(() => {
        if(Math.random() >= 0.5){
            resolve("You Won!!!")
        }
        else{
            reject(new Error("Better luck next time"))
        }
    }, 5000);

})

lottery.then((response) =>{
    console.log(response);
}).catch((err) =>{
    console.log(err);
})