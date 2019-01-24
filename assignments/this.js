/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the default for the window. If you put this and load the console it will only show the window properties.
* 2. Implicit Binding is the closest to the left of the dot when it is called. Ex. me.sayYourName();
* 3. New Binding will create a new object.
* 4. Explicit Binding will be call, bind and apply. These methods will either call a function for this either individually or as a array or create a new function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function name(){
    console.log(this);
}
name();

// Principle 2

// code example for Implicit Binding

let hello = function(name){
    console.log(`Hello, ${name}`);
}

let nameMine = {
    name: 'Snoopy',
    age: 7,
    hello: function(){
        console.log(this.name);
    }
};

nameMine.hello();

// Principle 3

// code example for New Binding

const Flower = function(type, color){
    this.type = type;
    this.color = color;
};

const rose = new Flower('Rose', 'blue');

console.log(rose);

// Principle 4

// code example for Explicit Binding

const courses = ['Psychology', 'Algebra', 'Computer Science', 'Pathology'];

const gradePoint = {
    gpa: 4.0,
    name: 'Kari'
};

const course = function(course1, course2) {
    console.log(`My name is ${this.name} and my GPA is ${this.gpa}. Some of my favorite courses are ${course1} and ${course2}`)
}

course.call(gradePoint, courses[0], courses[2]);