class person{
    constructor(firstName,lastName,age,place){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.place=place;
    }
    getDetails(){
        return(`The Name of the person is ${this.firstName} ${this.lastName} with age of ${this.age} born at ${this.place}`)
    }
}
let person1=new person("Maggi","muruga","25","Bangalore");
let person2=new person("Kiruba","thiyagu","30","Chennai");
let person3=new person("Saranya","ayyamuthu","27","Namakkal");
console.log(person3.getDetails());

