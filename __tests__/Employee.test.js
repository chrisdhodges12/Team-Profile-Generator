const Employee = require('../lib/Employee.js');


test("should verify the Employee object was created", () => {
    const employee = new Employee('Chris', 111, "chris@email.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Employee');

});