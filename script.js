// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი 
// ეს რიცხვი!!

//asnwer: 
 let number=prompt("enter number");
 if(number>0){
   console.log("ეს რიცხვი დადებითია");
 }else if(number<0){
   console.log("ეს რიცხვი უარტოფითია");
 }else if(number===0){
  console.log("ეს რიცხვი ნულის ტოლია");
  }
  else{
   console.log("error");
 }


//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
//asnwer: 
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს 
let operator = prompt("Enter the operator (+, -, *, /):");
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let result=0;

switch (operator) {
    case '+':
        result = num1 + num2;
        console.log(result);
        break;
    case '-':
        result = num1 - num2;
        console.log(result);
        break;
    case '*':
        result = num1 * num2;
        console.log(result);
        break;
    case '/':
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(result);
        } else {
            console.log("Error: Division by zero");
        }
        break;
    default:
        console.log("Error: Invalid operator");
}



//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!
//asnwer: 
// let operator2=prompt("Enter the operator (+, -, *, /):");
// let firstNumber = parseFloat(prompt("Enter the first number:"));
// let secondNumber2 = parseFloat(prompt("Enter the second number:"));
// let result2=0;
// if (operator ="+"){
//   result2=firstNumber+secondNumber2
//   console.log(result2)
// }
let a = 10;
let b = 5;
if (operator === "+") {
  console.log(a + b);
} else if (operator === "-") {
  console.log(a - b);
} else if (operator === "/") {
  console.log(a / b);
} else if (operator === "*") {
  console.log(a*b);
} else {
  console.log("Error");
}

//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input 
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else
//asnwer: 
let firstName=prompt("enter yout name");
let lastName=prompt("enter yout last name");
let email=prompt("enter your email");
let password=prompt("enter your paswword");
let phoneNumber=prompt("enter your phone number:");

if (firstName && lastName && email && password){
  console.log("შენ დარეგისტრირდი წარმატებულად");
}else{
  console.log("input is required");
}