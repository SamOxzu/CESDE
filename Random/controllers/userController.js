const fomrularioRegistro = (req,res) => {
    res.render('user/registro', {
        nombreVista: 'Registro'
    })
}

export {
    fomrularioRegistro
}