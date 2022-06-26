const Employee = require('../lib/Employee.js');



it("should verify the employee object was created", () => {
    const employee = new Employee('Chris');

    expect(employee.name).toBe('Chris');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});