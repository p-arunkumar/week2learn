
class Car{
  constructor() {
     this.wheels = 4
     this.modelYear = 2017
     this.lights = "off"
     this.turn = "off"
     this.speed = 0
  }

  lightson(){
    this.lights = "on"
    console.log("lights are now: " + this.lights)

  }
  lightsoff(){
    this.lights = "off"
    console.log("lights are now: " + this.lights)
  }
  turnright(){
    this.turn = "right"
  }
  turnleft(){
    this.turn = "left"
  }
  getSpeed(){
    console.log (this.speed + "km/h")
  }
  Super(){
    console.log(myCar)
  }
}

 let myCar = new Car();

 class Tesla extends Car {
   constructor() {
     super()
   }
  accelerate(){
     this.speed += 10
   }
  brake(){
    if (this.speed > 7){
    this.speed -= 7
    }
  }
  carInfo(){
    console.log(myTesla)
  }
 }

 let myTesla = new Tesla()
 let myTesla2 = new Tesla()
 myTesla2.modelYear = 2015


 class Tata extends Car {
   constructor() {
     super()
   }
   accelerate(){
     this.speed += 2
   }
   brake(){
     if (this.speed > 1.25){
     this.speed -= 1.25
     }
   }
   carInfo(){
     console.log(myTata)
   }
 }
 let myTata = new Tata()
 myTata.modelYear = 1994
 let myTata2 = new Tata()
 myTata2.modelYear = 1990


 class Toyota extends Car {
   constructor() {
     super()
   }
   accelerate(){
     this.speed += 7
   }
   brake(){
     if (this.speed > 5){
     this.speed -= 5
     }
   }
   carInfo(){
     console.log(myToyota)
   }
 }
 let myToyota = new Toyota()
 myToyota.modelYear = 1985
 let myToyota2 = new Toyota()
 myToyota2.modelYear = 2030

// make array
 var c = [myToyota2, myTesla, myTata2, myTesla2, myTata,  myToyota]
// //
// sort by modelYear high to low
 c.sort(function(a, b) {
  return b.modelYear-a.modelYear;
});

// // sort by model
c.sort(function(a, b){
    if(a.constructor.name < b.constructor.name) return -1;
    if(a.constructor.name > b.constructor.name) return 1;
    return 0;
})

//sort by model and year

var d = c.sort(function(a, b) {
  return b.modelYear-a.modelYear;
});

d.sort(function(a, b){
      if(a.constructor.name < b.constructor.name) return -1;
      if(a.constructor.name > b.constructor.name) return 1;
      return 0;
});
