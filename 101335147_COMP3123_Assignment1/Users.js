module.exports = class Users{
    constructor( unm, upwd){
        this.unm = unm
        this.upwd = upwd
    }

    display(){
        console.log(this.unm)
        console.log(this.upwd)
    }
}