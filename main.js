//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (owner, status, color, hungry )
{
  this.name   = owner;
  this.status = status;
  this.color  = color;
  this.hungry = hungry;
}
// console.log(Dog);

// Instances of Dog ------------------------------------------------------------------




// Needed: sadie, moonshine, atticus------------------------------------------------------------------


let sadie     = new Dog('mason','normal','black', false)
let moonshine = new Dog(undefined, 'normal', 'blue', true)
let atticus   = new Dog(undefined,'normal', 'pink', true)
console.log(sadie);
// ------------------------------------------------------------------

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool)
{
  this.cool    = cool;
  this.pet     = function(dog) {
    dog.status = 'happy'
  }
  this.feed    = function(dog)
  {
    dog.hungry = false
  }
}
 console.log

// Instances of Human
// Needed: mason, julia
let mason = new Human(false)
let julia = new Human(true)
