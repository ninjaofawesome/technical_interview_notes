//from Interview Cake

var threatLevel = 1;

function inspireFear(threatLevel){
    threatLevel += 100;
}

console.log(inspireFear(threatLevel));

/*this returns one because the variable 
is passed by value rather than reference.
Objects refer to things by reference, rather
than value.  (incidentally, to get the value
to 101, just add in a line that says 
"return threatLevel" as now threatLevel 1 will
have the value of 1 added and assigned to 100.  
Boom.)*/

var myThings = ['black coffee', 'rollerball pen']

function addToMyThings(myThings){
	myThings.push('kinda mushy fuji apple');
	myThings.push('music playlist');
	//takes off the last thing in the array
	myThings.pop();
	//adds one thing to the first position, removes 0
	myThings.splice(1, 0, 'sunny disposition');
	//removes the third item in the array, adds this.
	myThings.splice(2, 1, 'giant salad');
}
addToMyThings(myThings);
console.log(myThings);

/* This is an example of adding things to an 
object (the array) by reference, then I just
started having fun with messing around with the
array in general. */