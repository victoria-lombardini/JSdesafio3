let entrada=alert("Ingrese los alumnos del curso. Para finalizar toque la barra espaciadora");



do{
    lista=prompt("Ingrese nombre completo del alumno");
    edades= prompt("Ingrese la edad del alumno");
    document.write(lista+ ' ' + edades + "<br>");
}while(lista!=' '&& edades!= ' ');

