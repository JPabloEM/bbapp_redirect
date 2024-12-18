export default (req, res) => {
    // Redirige al esquema personalizado
    res.writeHead(302, { Location: "bbapp://pagoExitoso" });
    res.end();
  };
  