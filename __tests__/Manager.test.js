const Manager = require('../lib/Manager.js');



it("should verify the Manager object was created", () => {
    const manager = new Manager('Chris');

    expect(manager.name).toBe('Chris');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});