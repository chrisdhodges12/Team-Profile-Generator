class Employee {
    constructor(name = '', email = '', role = '', id = 0) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.id = id;
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
        return { role: "Employee"}
    };
}

module.exports = Employee;