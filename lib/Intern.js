class Intern {
    constructor(name = '', email = '', role = 'Intern', id = 0, school = '') {
        this.name = name;
        this.email = email;
        this.role = role;
        this.id = id;
        this.school = school;
    }

    getName() {
        return { name: this.name}
    };

    getId() {
        return { id: this.id}
    };

    getEmail() {
        return { email: this.email}
    };

    getRole() {
        return { role: 'Intern'}
    };

    getSchool() {
        return { school: this.school}
    }
}

module.exports = Intern;