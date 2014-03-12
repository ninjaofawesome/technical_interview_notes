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