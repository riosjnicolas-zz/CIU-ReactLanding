import React from 'react';

const Footer = ({ fecha }) => {

    //Ac� va el codigo JS
    //const fecha = new Date().getFullYear();

    return (
        <div>
            <h3>Todos los derechos reservados - A�o {fecha}</h3>
        </div>
        );
}

export default Footer;