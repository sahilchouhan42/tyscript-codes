enum Role{
    Admin,
    Manager,
    Employee
}

var userRole: Role=Role.Admin
console.log(userRole)  

enum Status{
    Active = "active",
    Inactive = "inactive",
    Blocked = "blocked"
}

let accountStatus: Status=Status.Active
console.log(accountStatus)

enum UserRole{
    ADMIN = "admin", 
    HR = "hr",
    EMPLOYEE = "employee"
}

var user: UserRole = UserRole.HR
console.log(user)

let code: 200|400|500

code = 400
console.log(code)


enum OrderStatus{
    Pending= "pending",
    Delivered = "delivered"
}

var order:OrderStatus= OrderStatus.Delivered
console.log(order)