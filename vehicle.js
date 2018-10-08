var vehicle = {
  name: "Susan", //  - a name that is a string
  doors: 2,
  color:"white",
  type:"honda civic",
  moonroof: true,
  distanceToEmpty: 100, // - a distanceToEmpty that is a number of km it can travel
  speed: 50, //- a speed that is a number and represents the number of km/hr your vehicle can travel
  honkHonk: function(){   // - a honkHorn method that returns a string of the sound that your vehicle makes when you honk the horn
      console.log("Beep Beep");
    }
  x: 0,
  y: 0,
  move: function(km, direction){ // if/else statment that changes the x and/or y coordinates of my car
      if (direction == "forward") {
        this.x += km;
      } else if (direction == "back"){
        this.x -= km;
      } else if (direction == "up") {
        this.y += km;
      } else if (direction == "down") {
          if (this.y > 0){
            this.y -= km;
          }
        }
      this.location();
  },
  currentlocation: function() //a currentLocation function
  {
      console.log(vehicle.name + "is a " + vehicle.color + vehicle.type); // prints the name, color, and type of my vehicle
      console.log("x:", this.x, "y:", this.y); // - a getter/setter method that can get the currentLocation or set the currentLocation
    }

var lights = ["purple","pink","yellow","green","white","blue","brown"]; //changing dshboard lights
}

for(index in lights){
  var light = lights[index];
  console.log(light + " color");
}

vehicle.honkHonk(); //dot notation to access the noise my car makes
vehicle.move(2,"forward");
vehicle.move(1,"back");


/*
* You get to give yourself an awesome vehicle
* It is an object
* Make it badass
* Be sure to give it the following:
*   - a name that is a string
*   - a distanceToEmpty that is a number of kilometers it can travel
*   - a speed that is a number and represents the number of km/hr your vehicle can travel
*   - a currentLocation
*   - a getter/setter method that can get the currentLocation or set the currentLocation
*   - a honkHorn method that returns a string of the sound that your vehicle makes when you honk the horn
*/
