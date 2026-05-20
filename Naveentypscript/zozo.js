// union types
// let empid:string | number;
// empid= "EMP001"
// empid = 10001
// // empid = false
// console.log(empid);
// 9. Literal Types
// let employeestatus: "active" | "in-active" | "absent" 
// employeestatus = "active"
// employeestatus = "in-active"
// employeestatus = "absent"
// console.log(employeestatus);
// let performanace: "Good" | "Bad" | "worst" | ""
// performanace = ""
// performanace = "Good"
// performanace = "Bad"
// performanace = "worst"
// console.log(performanace);
// 10 .Enums
var Role;
(function (Role) {
    Role[Role["Admin"] = 101] = "Admin";
    Role[Role["Manager"] = 201] = "Manager";
    Role[Role["Employee"] = 301] = "Employee";
})(Role || (Role = {}));
console.log(Role);
// dot notation
console.log("Admin ID =>", Role.Admin);
console.log("Manager ID =>", Role.Manager);
console.log("Employee ID =>", Role.Employee);
// bracket notation
console.log("Admin Name =>", Role['101']);
console.log("Manager Name =>", Role['201']);
console.log("Employee Name =>", Role['301']);
var College;
(function (College) {
    College[College["HOD"] = 1001] = "HOD";
    College["TEACHER"] = "TECH005";
    College["STUDENT"] = "STU007";
})(College || (College = {}));
console.log(College);
console.log("hod id", College.HOD);
console.log("hod Name", College['1001']);
export const month = 24;
export const days = 7;
export function add(a, b) {
    console.log("addition=>", (a + b));
}
console.log("zozo");
add(10, 20);
console.log("File name zozo month :", month);
console.log("File name zozo days :", days);
//# sourceMappingURL=zozo.js.map