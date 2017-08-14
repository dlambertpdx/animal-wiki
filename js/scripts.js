$(function() {
  var animal = prompt("Please enter from the following animals to learn more: turtles, elephants, or scorpions.");

  thisAnimal = animal.toLowerCase();

  if(animal === "turtles") {
    $('#turtles').show();
  } else if(animal === "elephants") {
    $('#elephants').show();
  } else if(animal === "scorpions") {
    $('#scorpions').show();
  } else {
    $('#error').show();
  }
});
