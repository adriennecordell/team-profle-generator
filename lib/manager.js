const Employee = require('./Employee')

class manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = offficeNumber;
        this.role = "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = manager;