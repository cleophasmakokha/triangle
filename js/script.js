function triangle() {
  //create an array to store the sides
  var sides = [];
  //push all the sides into the array
    sides.push(document.getElementById("num1").value);
    sides.push(document.getElementById("num2").value);
    sides.push(document.getElementById("num3").value);
    //assign the values of the array to variables a,b,c
      var [a,b,c] = sides;
      var display = document.getElementById("display");
      var explanation = document.getElementById("explanation");
      if(a.length === 0 || b.length === 0 || c.length === 0 ) {
        //check whether the user has typed something
        display.innerHTML = "<p>Please <span class='fill'>FILL</span> all the fields</p>"
      } else {
        //convert the strings to numbers
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);

}
