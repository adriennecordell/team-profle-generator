const Intern = require("../lib/intern");

test("Set school", () => {
    const testValue = "UW"
    const employee= new Intern("Josh", 1, "josh@yahoo.com", testValue);
    expect(employee.school).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Intern"
    const employee = new Intern("Josh", 1, "josh@yahoo.com", testValue);
});

test("Get school", () => {
    const testValue = "UW"
    const employee = new Intern("Josh", 1, "josh@yahoo.com", testValue);
    expect(employee.getSchool()).toBe(testValue)
});