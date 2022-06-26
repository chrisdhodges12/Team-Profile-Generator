const Engineer = require('../lib/Engineer.js');



it("should verify the Engineer object was created", () => {
    const engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toEqual(expect.any(String));
});