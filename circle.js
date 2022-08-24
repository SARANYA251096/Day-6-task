class Circle{
    constructor(colour,radius){
        this.colour=colour;
        this.radius=radius;
     
    }
    setColour(color){
        this.colour=color;
    }
    setRadius(radii){
        this.radius=radii;
    }
    getArea(){
        this.area=3.14*this.radii*this.radii;
        return this.area;
    }
    getCircumference(){
        this.circumference=2*3.14*this.radii;
        return this.circumference;
    }

getDetails(){
    return (`The Colour of the circle is ${this.colour} and its radius is ${this.radius}.
    The area of the circle is ${this.area},and the circumference of circle is ${this.circumference}`);
}
}
let circle1=new Circle("red",2.14);
let circle2=new Circle("green",5.14);
console.log(circle1.getColour());
circle1.setColour("blue");
circle2.setRadius(8);
console.log(circle2.getDetails());




    
    
