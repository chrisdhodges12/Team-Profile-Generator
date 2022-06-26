class Manager {
    constructor(name = '', email = '', role = 'Manager', id = 0, officeNumber = 0) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.id = id;
        this.officeNumber = officeNumber;
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
        return { role: 'Manager'}
    };

}

module.exports = Manager;