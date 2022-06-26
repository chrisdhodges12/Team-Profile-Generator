const Intern = require('../lib/Intern.js');



it("should verify the Intern object was created", () => {
    const intern = new Intern();

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
    expect(intern.school).toEqual(expect.any(String));
});