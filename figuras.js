// calculos para el cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");
const perimetroCuadrado = ladoCuadrado *4 + "cm" ;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado);
const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es:" + areaCuadrado +"cm2");
console.groupEnd();
// calculos para el triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden: "
+ ladoTriangulo1
+"cm, "
+ ladoTriangulo2
+ "cm, "
+ baseTriangulo
+ "cm");
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm.")
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: "+ perimetroTriangulo + "cm.")
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es: "+ areaTriangulo + "cm2.");
console.groupEnd();
//calgulos para el circulo
console.group("circulos");
//radio
const radioCirculo = 4;
console.log("el radio del circulo es: "+radioCirculo + "cm")
//diametro
const diametroCirculo = radioCirculo*2;
console.log("el diametro del circulo es: " + diametroCirculo + "cm")
//PI
const pi = Math.PI;
console.log("pi es: " + pi)
//circunferencia
const perimetroCirculo = diametroCirculo*pi;
console.log("el perimetro del circulo es: " + perimetroCirculo + "cm")
//area 
const areaCirculo = (radioCirculo*radioCirculo)*pi
console.log("el area del circulo es: " + areaCirculo + "cm2")
console.groupEnd();