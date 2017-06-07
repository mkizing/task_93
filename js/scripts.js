var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();

var textAfter = text.replace("Velociraptor", dinosaurUpperCased);

var half = textAfter.length/2;

var halfText = textAfter.substr(0, half)

console.log(halfText)