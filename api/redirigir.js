export default (req, res) => {
    console.log("La función redirigir.js ha sido invocada");
  
    res.writeHead(302, { Location: "bbapp://pagoExitoso" });
    res.end();
  };
  