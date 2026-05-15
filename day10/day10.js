function checkAge(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not Eligible");
    }
}
checkAge(21);

function tableOf(n){

    console.log("Your" + n + "'stable is Here:");
    for (let i = 1; i <= 10; i++) {
        console.log(n + "x" + i + " = " + (n * i));
    }
}
tableOf(10);
console.log("The Number From 1 To 10 Is Here: ");
for(let i = 1; i <= 10; i++){
    console.log(i);
}

let i = 1;
while (i<=10){
    if (i % 2 != 0){
        console.log("This is odd Number:", i); 
    }
    i++;
}
let ID = "DV05WD00020"
console.log("ID:", ID);
for(let j = 1; j<=10; j++){
    if(j % 2 == 0){
        console.log("Even Number:", j);
    }
    else{
        console.log("Odd Number:", j);
    }
}