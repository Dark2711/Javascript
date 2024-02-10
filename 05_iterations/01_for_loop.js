// for loop

/* for(intilisation; condition; increment/decrement){
        body
}*/

// for (let i = 1; i <= 10; j++) {
//     const element = i;
//     console.log(element);
    
// }

for (let i = 1; i <=10; i++) {
    // console.log(`outer loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
}

let myArray = ["Spiderman", "thor", "Ironman", "Captain America"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 7) {
//         console.log("Thala for a reason");
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }
for (let index = 1; index <= 10; index++) {
    if (index == 7) {
        console.log("Thala for a reason");
        continue
    }
    console.log(`Value of i is ${index}`);
    
}

