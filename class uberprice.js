class Uber{
    constructor(distance,price,waitingPeriod){
        this.distance=distance;
        this.price=price;
        this.waitingPeriod=waitingPeriod;
    }
    getUberDetails(){
        return('The distance of the ride is ${this.distance} with price of ${this.price} and waitingPeriod is about ${this.waitingPeriod}')
    }

getPrice(){
    let totalPrice=(this.distance*this.price)+(this.waitingPeriod*20);
    return totalPrice;
}
}
let customer1=new Uber(110,50,10);
console.log(customer1.getPrice());
