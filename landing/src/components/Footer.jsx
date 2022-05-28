import React from 'react';

const Footer = ({ fecha }) => {

    //Acá va el codigo JS
    //const fecha = new Date().getFullYear();

    return (
        <div>
            <h3>Todos los derechos reservados - Año {fecha}</h3>
        </div>
        );
}

export default Footer;