console.log("welcome");
let studentname:string = "Subash"
studentname = "naveen"
 
let age:number = 20
let isPassExam:boolean = true

console.log(studentname , age , isPassExam);

let selectedCow:string | null = null

selectedCow = "raja"
console.log(selectedCow);

let input: unknown = "Boopathi";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}


function printMessage(): void {
  console.log("Hello");
}





