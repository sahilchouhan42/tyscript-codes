"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Employee"] = 2] = "Employee";
})(Role || (Role = {}));
var userRole = Role.Admin;
console.log(userRole);
var Status;
(function (Status) {
    Status["Active"] = "active";
    Status["Inactive"] = "inactive";
    Status["Blocked"] = "blocked";
})(Status || (Status = {}));
let accountStatus = Status.Active;
console.log(accountStatus);
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["HR"] = "hr";
    UserRole["EMPLOYEE"] = "employee";
})(UserRole || (UserRole = {}));
var user = UserRole.HR;
console.log(user);
let code;
code = 400;
console.log(code);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "pending";
    OrderStatus["Delivered"] = "delivered";
})(OrderStatus || (OrderStatus = {}));
var order = OrderStatus.Delivered;
console.log(order);
