function objetosjs() {
  const person = {
    Nombre: "Aitor",
    Apellido: "Carro",
    Edad: 23,
    Altura: 175,
  };

 window.alert(
   `Mi nombre es: ${person.Nombre}  y tengo  ${person.Edad}  años.`
    //"Mi nombre es: " + person.Nombre + " y tengo " + person.Edad + " años."
  );
}

function objetosJs() {
  const person = {
    Nombre: "Aitor",
    Apellido: "Carro",
    id: 5566,
  };

  document.getElementById("obj2").innerHTML =
    person.Nombre + " " + person.Apellido;
}

function metodSort(){
  const alumnos = [
    {nombre: 'Sergio', edad: 21},
    {nombre: 'Guillem', edad: 26},
    {nombre: 'Aitor', edad: 23},
    {nombre: 'Borja', edad: 22},
    {nombre: 'Canallita', edad: 25}
  ]
  alumnos.sort((al1, al2)=>{
      if(al1.edad < al2.edad){
          numero = 1;
      } else if (al1.edad > al2.edad){
        numero = -1;
      } else {
        numero = 0;
      }
      return numero;
  });
  console.log(alumnos);
}
