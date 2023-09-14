


/*
1. store a ceisius temperature into a variable.
2. save the converted Fahrenheit temperature in a varialbe 
C to F = Multiply by 9, then divide by 5, then add 32
3. output to the console
*/
function convertC2F(ceisius){
    let ceisius,Fahrenheit
    ceisius = 23;
    Fahrenheit = ceisius * 9 / 5 + 32;
    Fahrenheit =Fahrenheit.toFixed(1);
    return Fahrenheit
}
console.log(ceisius + " C is " + convertC2F(ceisius) + ".");

/* 
1. Store a Fahrenheit temperature into a variavle.
2. Save the converted Ceisius temperature in a variavle
F to C = Substract 32, then multiply by 5, then divide by 9
3. Output to the console.
*/
function convertF2C(Fahrenheit){
    Fahrenheit = 200;
    ceisius = ((Fahrenheit - 32) * 5 / 9).toFixed(1);
    return ceisius;
}
console.log(Fahrenheit + " F is " + convertF2C(Fahrenheit) + "." )
/*
1. Store a weight value in pounds
2. Save the converted kilogram weight in a variable
    KG = LBS / 2.2046
3. Output to the console
*/
function convertLB2KG(lbs){
    let kg, lbs;
    lbs = 3;
    kg = (lbs /  2.2046).toFixed(2);
    return kg;
}
console.log(lbs + " lbs is " + convertLB2KG(lbs) + " kg.");
/*
1. Store a weight value in kilograms
2. Save the converted pounds weight in a variable
    LBS = KG / 0.454
3. Output to the console
*/
function convertKG(kg){
    kg = 3;
    lbs = (kg / 0.454).toFixed(0);
    return lbs;
}

console.log(kg + " kg is " + convertKG(kg) + " lbs.");
