module.exports = (req, res) => {
    res.writeHead(302, { Location: "bbapp://pagoExitoso" });
    res.end();
  };