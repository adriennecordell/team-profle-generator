const Engineer = require('../lib/engineer');

test("set github", () => {
    const testValue = "Github User";
    const employee = new Engineer("Josh", 1, "josh@yahoo.com", testValue);
    expect(employee.github).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Josh", 1, "josh@yahoo.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Get github", () => {
    const testValue = "Github User"
    const employee = new Engineer("Josh", 1, "josh@yahoo.com");
    expect(employee.getGithub()).toBe(testValue);
});