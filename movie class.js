class Movie{
    constructor(movie,studio,rating){
        this.movie=movie;
        this.studio=studio;
        this.rating=rating;
    }
    setRating(rating){
        if(rating===null){
            return rating=PG;
        }
    }
    getDetails(){
        return(`The Name of the movie is ${this.movie} where the studio name is ${this.studio} and its rating is ${this.rating}`);
    }
}
let movie1=new Movie("kgf","RS production","R2");
let movie2=new Movie("Casino Royale","Eon production");
movie2.setRating(this.rating=PG);
let movie3=new Movie("Viruman","KS production","PG23");
console.log(movie2.getDetails());



