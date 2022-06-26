const Intern = require('../lib/Intern.js');



test("should verify the Intern object was created", () => {
    const intern = new Intern('Chris', 111, "chris@email.com", "UNC");

    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toEqual(expect.any(String));
});