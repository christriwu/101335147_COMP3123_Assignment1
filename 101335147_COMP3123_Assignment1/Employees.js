module.exports = class Employee {
    constructor(eid, enm){
        this.eid = eid
        this.enm = enm
    }

    display(){
        console.log(this.eid)
        console.log(this.enm)
    }
}
