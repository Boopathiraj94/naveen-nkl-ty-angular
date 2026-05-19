// console.log("welcome");
// let studentname:string = "Subash"
// studentname = "naveen"

// let age:number = 20
// let isPassExam:boolean = true

// console.log(studentname , age , isPassExam);

// let selectedCow:string | null = null

// selectedCow = "raja"
// console.log(selectedCow);

// let input: unknown = "Boopathi";

// if (typeof input === "string") {
//   console.log(input.toUpperCase());
// }


// function printMessage(): void {
//   console.log("Hello");
// }


// let nums = [10,40,'naveen','raja']

// let marks:number[] = [20,40,60,80,100]
// let studentnames : string[] = ['naveen','raja','kamalesh','bhatsha']

// console.log(studentnames);

// console.log(marks);

// let student_marks:[string,number] = ['naveen',40]
// console.log(student_marks);

/*
array of object

[{},{},{},{}]
*/

// let employeelist: { name:string,age:number,salary:number,role:string }[] = [
//   {
//     name:'naveen',
//     age:22,
//     salary:200000,
//     role:'developer'
//   },
//   {
//     name:'raja',
//     age:23,
//     salary:40000,
//     role:"tester"
//   }
// ]

// console.log(employeelist);

// // using Type alis
// type Employee = { name:string,age:number,salary:number,role:string }

// let emplist:Employee[] = []

// emplist[0] =  {
//     name:'raja',
//     age:23,
//     salary:40000,
//     role:"tester"
//   }

// emplist[1] =  {
//     name:'naveen',
//     age:23,
//     salary:40000,
//     role:"tester"
//   }

// console.log(emplist);


/*

function functionName(){
  //block of code
}

functionName() // calling / revoke

*/

// without return function
// function addition(a: number, b: number) {
//   console.log(a+b);

// }
// addition(20, 30)

// // with return funtcion

// function substraction(i:number,j:number):number {
//   // console.log("inside function=> ,", i-j);

//   let ans = (i-j)
//   return ans; //explicit
// }

// let op = substraction(30,20);

// console.log("explicit output => ",op);

// let a:undefined = undefined;

// optional parameter
// function profile(name?:string | number){
//   console.log("profile name",name);

// }

// profile()
// profile("naveen")
// profile(20)

// default parameter function
let add = (a: number = 0, b: number = 0) => {
  debugger
  console.log(a + b);

}
// NaN => Not a Number
add(10,20) // 30
add(10) // 10
add() // 0