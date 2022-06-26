class Engineer {
    constructor(name = '', email = '', role = 'Engineer', id = 0, github = '') {
        this.name = name;
        this.email = email;
        this.role = role;
        this.id = id;
        this.github = github;
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
        return { role: 'Engineer'}
    };

    getGithub() {
        return { github: this.github}
    }
}

module.exports = Engineer;