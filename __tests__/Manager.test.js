const Manager = require('../lib/Manager.js');



test("should verify the Manager object was created", () => {
    const manager = new Manager('Chris', 111, "chris@email.com", 22);

    expect(manager.getRole()).toEqual('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});