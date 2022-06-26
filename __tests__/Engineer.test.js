const Engineer = require('../lib/Engineer.js');



test("should verify the Engineer object was created", () => {
    const engineer = new Engineer('Chris', 111, "chris@email.com", "MyGitHub");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.github).toEqual(expect.any(String));
});