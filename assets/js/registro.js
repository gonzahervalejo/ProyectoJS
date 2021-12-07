
    //  constructor para formulario iniciar sesion

    

function usuario (Nombre, Apellido, Usuario, Ciudad) {

    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Usuario = Usuario;
    this.Ciudad = Ciudad;
}

const registro1 = new usuario ( "Diego", "Fernandez", "@DFernandez", "Marbella");
const registro2 = new usuario ( "Micaela", "Rodriguez", "@RodriguezMica", "Buenos Aires");
const registro3 = new usuario ( "Valentin", "Russo", "@VRusso", "Necochea");
const registro4 = new usuario ( "Mauro", "Gonzalez", "@MGonzalez", "Bragado");



console.log(registro1);
console.log(registro2);
console.log(registro3);
console.log(registro4);

const registros = [registro1, registro2, registro3, registro4];
console.log(registros);

registros.forEach (verUsuario => {verUsuario.Apellido
console.log(verUsuario.Apellido)});


    // Necesitaria devolucion de esto si es que esta oka,
    //  Quise hacer como que se complete automaticamente el constructor

    usuario = [];
    let cantidad = 4;

do {

   let entrada = prompt ("Ingresar nombre");
   usuario.push(entrada.toUpperCase());
   console.log(usuario);
 }
 while(usuario.length != cantidad);

alert (usuario.join("\n"));

const registro = usuario;
console.log(usuario);


