const Manager = require('../lib/manager')

test("set office number", () => {
    const testValue = 8
    const employee = new Manager("Josh", 1, "josh@yahoo.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Manager"
    const employee = new Manager("Josh", 1, "josh@yahoo.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("get office number", () => {
    const testValue = 8
    const employee = new Manager("Josh", 1, "josh@yahoo.com", testValue)
    expect(employee.getOfficeNumber()).toBe(testValue);
});