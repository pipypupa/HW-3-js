const result = 5 + 5 + "5";
console.log("Result:", result);
console.log("Тип змінної result:", typeof result);

const email = "your.email@example.com";
const containsAt = email.includes("@");
const emailLength = email.length;

console.log("Чи містить email символ '@':", containsAt);
console.log("Загальна кількість символів в email:", emailLength);

const word1 = "My";
const word2 = "name";
const word3 = "is";
const fullName = word1 + " " + word2 + " " + word3 + " Viktor";

console.log("Full Name:", fullName);

const userName = "Андрію"; 
const payment = 300; 

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень.`);
