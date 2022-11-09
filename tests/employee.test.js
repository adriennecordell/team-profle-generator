const Employee = require('../lib/employee');


test('employee object', () => {
    const employee = new Employee
    expect(typeof(employee)).toBe("object");
});

test ('Set employee name', () => {
    const name = "Josh"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test ('Set employee ID', () => {
    const testId = 13
    const employee = new Employee("Josh", testId);
    expect(employee.id).toBe(testId)
});

test ('Set employee email', () => {
    const testEmail = "josh@yahoo.com"
    const employee = new Employee("Josh", 1, testEmail)
    expect(employee.email).toBe(testEmail)
});

test ('Get employee name', () => {
    const testName = "Josh"
    const employee = new Employee("Josh", testName);
    expect(employee.getName()).toBe(testName);
});

test ('Get employee ID', () => {
    const testId = 13
    const employee = new Employee("Josh", testId );
    expect(employee.getId()).toBe(testId);
});

test ('Get employee email', () => {
    const testEmail = "josh@yahoo.com"
    const employee = new Employee("josh", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test ('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Josh" , 1, "josh@yahoo.com");
    expect(employee.getRole()).toBe(testRole);
});