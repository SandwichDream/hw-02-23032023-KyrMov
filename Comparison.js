// (1)

console.log("1) Calculator");

let operation = true;
let value = Number(prompt("(1. Calculator) Value 1(number):"));
let operator = "";
let chekText = String(value);
if (chekText != "NaN"){
    operator = (prompt("(1. Calculator) Operators +, -, * or /:"));
}
let chekOperator = operator == "+" ? "+" : operator == "-" ? "-" : operator == "*" ? "*" : operator == "/" ? "/" : operation = false;

let result = value;
let n = 1;

console.log(String(value));

while(operation == true){
    n++;
    operator = "";
    value = Number(prompt(`(1. Calculator) Value ${n}(number):`));
    chekText = String(value);
    if(chekText == "NaN"){
        break;
    }
    if(value === 0 && chekOperator === "/"){
        break;
    }
    console.log(String(chekOperator+value));
    result = chekOperator == "+" ? result + value : chekOperator == "-" ? result - value : chekOperator == "*" ? result * value : chekOperator == "/" ? result / value : result;
    console.log(`= ${result}`);
    operator = (prompt("(1. Calculator) Operators +, -, * or /:"));
    chekOperator = operator == "+" ? "+" : operator == "-" ? "-" : operator == "*" ? "*" : operator == "/" ? "/" : operation = false;
}
if(operation === false){
    console.log("This is not what is required in the condition or you are just done with it");
}
else{
    console.log("ERROR");
}

// (2)

console.log("2) Even numbers");

value = Number(prompt("(2. Even numbers) Enter your number:", 20));
result = 0;

isNaN(value) ? console.log("This isn't number!") : NaN;

while(result < value){
    ++result%2 === 0 ? console.log(result) : NaN;
}

// (3)

console.log("3) Log in");

let login = String(prompt("(3. Log in) Enter your login:"));
let password = String(prompt("(3. Log in) Enter your password:"));

login === "Admin" && password === "123456" ? console.log("Вітаємо в системі") : console.log("Пароль логін не вірні");

// (4)

console.log("4) Age");

value = Number(prompt("(4. Age) Enter your age:"));
let bool = false;

bool = value > 18 ? true : value === 18 ? NaN : false; // Зроблено за умовою ¯\_(ツ)_/¯

console.log(bool)

// (5)

console.log("5) Discount");

value = Number(prompt("(5. Discount) Enter your number:"));
value > 10000 ? console.log(`${value} з 7% знижки: ${value-(value/100*7)}`) : value > 3000 ? console.log(`${value} з 5% знижки: ${value-(value/100*5)}`) : value > 100 ? console.log(`${value} з 3% знижки: ${value-(value/100*3)}`) : value <= 0 ? console.log("Число дорівнює або менше за нуль") : console.log(`${value}. У вас нема знижки до сплати число яке було введене`);